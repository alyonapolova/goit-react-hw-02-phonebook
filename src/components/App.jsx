import { Component } from 'react';
import { render } from 'react-dom';
import { Form } from './Form/Form';
import React from 'react';

export class App extends Component {
  state = { data: '' };
  getData = data => console.log(data);
  render() {
    return <Form onSubmit={this.getData}></Form>;
  }
}
