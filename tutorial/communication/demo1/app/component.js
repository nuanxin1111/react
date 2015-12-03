import React from 'react';
import ReactDOM from 'react-dom';

// 父组件
var MyContainer = React.createClass({
  getInitialState: function () {
    return {
      checked: true
    };
  },
  render: function() {
    return (
      <ToggleButton text="Toggle me" checked={this.state.checked} />
    );
  }
});

// 子组件
var ToggleButton = React.createClass({
  render: function () {
    // 从【父组件】获取的值
    var checked = this.props.checked,
        text = this.props.text;

    return (
        <label>{text}: <input type="checkbox" checked={checked} /></label>
    );
  }
});

module.exports = MyContainer, ToggleButton;