import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.js';

main();


function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}