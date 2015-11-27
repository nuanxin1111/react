import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import './global.css';

import CommentBox from './mycomment';

class About extends React.Component {
  render() {
    return (
        <div>About</div>
        );
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
            <h3>Message</h3>
            </div>
            );
    }
}

class Inbox extends React.Component {
  render() {
    return (
        <div>
        <h2>Inbox</h2>
        {this.props.children ||  "welcome to your Inbox"}
        </div>
        );
    }
}

class Demo extends React.Component {

    constructor(props) {
        super();
        this.state = {
            myname:[]
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const name = this.refs.name.value;
        const age = this.refs.age.value;
        console.log(name);
        console.log(age);
    }

    handleChange(event) {
        this.setState({myname:event.target.value});
        console.log(this.state.myname);
    }

    render() {
        return (
            <div> 
                    <h2>Demo</h2> 
                    <div>
                        <form onSubmit={event => {this.handleSubmit(event)}}>
                        <input ref="name" placeholder="your name" onChange={event=> {this.handleChange(event)}} value={this.state.myname} />
                        <input ref="age" placeholder="your age"   />
                        <button type="submit">submit</button>
                        </form>
                    </div>
            </div>
            );
    }



}


class NoMatch extends React.Component {
    render() {
    return (
        <div>NoMatch</div>
        );
    }
}
// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends React.Component {
    render() {
        return (
            <div>
                <div>App</div>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                    <li><Link to="/demo">Demo</Link></li>
                </ul>
                    {this.props.children}
             </div>
      );
    }
}

ReactDOM.render((
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Demo} />
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} >
                <Route path="message/:id" component={Message} /> 
            </Route>
            <Route path="demo" component={Demo} />
            <Route path="*" component={NoMatch} />
      </Route>
  </Router>
), document.getElementById('example'))

