"use strict";

ReactDOM.render(React.createElement(
  "div",
  { className: "row" },
  React.createElement(
    "div",
    { className: "col s12 m6" },
    React.createElement(
      "div",
      { className: "card blue-grey darken-1" },
      React.createElement(
        "div",
        { className: "card-content white-text" },
        React.createElement(
          "span",
          { className: "card-title" },
          "Card Title"
        ),
        React.createElement(
          "p",
          null,
          "I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively."
        )
      ),
      React.createElement(
        "div",
        { className: "card-action" },
        React.createElement(
          "a",
          { href: "#" },
          "This is a link"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "This is a link"
        )
      )
    )
  )
), document.getElementById('example'));