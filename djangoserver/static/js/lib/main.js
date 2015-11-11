"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Comment = (function (_React$Component) {
	_inherits(Comment, _React$Component);

	function Comment() {
		_classCallCheck(this, Comment);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Comment).apply(this, arguments));
	}

	_createClass(Comment, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "card" },
				React.createElement(
					"div",
					{ className: "card-title" },
					this.props.children
				),
				React.createElement(
					"div",
					{ className: "card-content" },
					this.props.author
				)
			);
		}
	}]);

	return Comment;
})(React.Component);

var CommentList = (function (_React$Component2) {
	_inherits(CommentList, _React$Component2);

	function CommentList() {
		_classCallCheck(this, CommentList);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentList).apply(this, arguments));
	}

	_createClass(CommentList, [{
		key: "render",
		value: function render() {
			var commentsNode = this.props.clist.map(function (comment, index) {
				return React.createElement(
					Comment,
					{ key: 'com-' + index, author: comment.author },
					comment.whatsay
				);
			});
			return React.createElement(
				"div",
				{ className: "comment-list" },
				commentsNode
			);
		}
	}]);

	return CommentList;
})(React.Component);

var CommentBox = (function (_React$Component3) {
	_inherits(CommentBox, _React$Component3);

	function CommentBox(props) {
		_classCallCheck(this, CommentBox);

		var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(CommentBox).call(this));

		_this3.state = {
			clist: props.clist || []
		};
		return _this3;
	}

	_createClass(CommentBox, [{
		key: "loadDataFromServer",
		value: function loadDataFromServer() {
			var _this4 = this;

			$.ajax({
				url: this.props.url,
				dataType: "json",
				type: "GET",
				success: function success(resclist) {
					_this4.setState({ clist: resclist });
				},
				error: function error(xhr, status, err) {
					console.log(err.toString());
				}
			});
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			this.loadDataFromServer();
		}
	}, {
		key: "handleNewComment",
		value: function handleNewComment(comment) {
			var _this5 = this;

			$.ajax({
				url: this.props.url,
				dataType: "json",
				type: "POST",
				data: comment,
				success: function success(resclist) {
					console.log("ok");
					_this5.setState({ clist: resclist });
				},
				error: function error(xhr, status, err) {
					console.log(err.toString());
				}
			});
		}
	}, {
		key: "render",
		value: function render() {
			var _this6 = this;

			return React.createElement(
				"div",
				{ className: "comment-box" },
				React.createElement(
					"div",
					{ "class": "nav-wrapper" },
					React.createElement(
						"h3",
						{ className: "brand-logo center" },
						"CommentsBox"
					)
				),
				React.createElement(CommentList, { clist: this.state.clist }),
				React.createElement(CommentForm, { onSubmit: function onSubmit(comment) {
						return _this6.handleNewComment(comment);
					} })
			);
		}
	}]);

	return CommentBox;
})(React.Component);

var CommentForm = (function (_React$Component4) {
	_inherits(CommentForm, _React$Component4);

	function CommentForm() {
		_classCallCheck(this, CommentForm);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(CommentForm).apply(this, arguments));
	}

	_createClass(CommentForm, [{
		key: "handleSubmit",
		value: function handleSubmit(e) {
			e.preventDefault();
			var author = this.refs.author.value;
			var whatsay = this.refs.whatsay.value;
			var form = this.refs.form;
			console.log(typeof author === "undefined" ? "undefined" : _typeof(author), author.length);
			console.log(author, whatsay);
			if (author == '' || whatsay == '') {
				alert("author or whatsay is null");
				return;
			}

			this.props.onSubmit({ author: author, whatsay: whatsay });

			form.reset();
		}
	}, {
		key: "render",
		value: function render() {
			var _this8 = this;

			return React.createElement(
				"form",
				{ className: "comment-form", ref: "form", onSubmit: function onSubmit(e) {
						_this8.handleSubmit(e);
					} },
				React.createElement("input", { type: "text", placeholder: "Your name", className: "validate", ref: "author" }),
				React.createElement("input", { type: "text", placeholder: "Input your comment", ref: "whatsay" }),
				React.createElement("input", { type: "submit", className: "waves-effect waves-light btn", value: "Add comment" })
			);
		}
	}]);

	return CommentForm;
})(React.Component);

var box = ReactDOM.render(React.createElement(CommentBox, { url: "serverload/" }), document.getElementById('example'));