import React from 'react';
import ReactDOM from 'react-dom';

class Comment extends React.Component {

	render() {
		return (
			<div className="card">
				<div className="card-title">
					{this.props.children}
				</div>
				<div className="card-content">
					{this.props.author}
				</div>
			</div>
			);
	}
}

class CommentList extends React.Component {

	render() {
		var commentsNode = this.props.clist.map((comment, index) => {
			return (
				<Comment key={'com-' + index} author={comment.author}>
				{comment.whatsay}
				</Comment>
			);
		});
		return (
			<div className="comment-list">
				{commentsNode}
			</div>
		);
	}
}
class CommentBox extends React.Component {

	constructor(props) {
		super();
		this.state = {
			clist: props.clist || []
		};
	}

	loadDataFromServer() {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			type: "GET",
			success: resclist => {
				this.setState({clist:resclist});
			},
			error: (xhr, status, err) => {
				console.log(err.toString());
			}
		});
	}

	componentDidMount() {
		this.loadDataFromServer();
	}

	handleNewComment(comment) {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			type:"POST",
			data:comment,
			success: (resclist) => {
				console.log("ok");
				this.setState({clist:resclist})
			},
			error:(xhr, status, err) => {
				console.log(err.toString());
			}
		});
	}

	render() {
		return (
			<div className="comment-box">
				<div class="nav-wrapper">
				<h3 className="brand-logo center">CommentsBox</h3>
				</div>
				<CommentList clist={this.state.clist}/>
				<CommentForm onSubmit={comment => this.handleNewComment(comment)} />
			</div>
		);
	}
}

class CommentForm extends React.Component {

	handleSubmit(e) {
		e.preventDefault();
		const author = this.refs.author.value;
		const whatsay = this.refs.whatsay.value;
		const form = this.refs.form;
		console.log(typeof(author), author.length);
		console.log(author, whatsay);
		if (author == '' || whatsay == '') {
			alert("author or whatsay is null");
			return;
		}

		this.props.onSubmit({author:author, whatsay:whatsay});

		form.reset();
	}

	render() {
		return (
			<form className="comment-form" ref="form" onSubmit={e => {this.handleSubmit(e)}}>
			<input type="text" placeholder="Your name" className="validate" ref="author" />
			<input type="text" placeholder="Input your comment" ref="whatsay" />
			<input type="submit"  className="waves-effect waves-light btn" value="Add comment"/>
			</form>
		);
	}
}
/*
var box = ReactDOM.render(
	<CommentBox url="serverload/" />,
	document.getElementById('example')
);
*/