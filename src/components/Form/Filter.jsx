import React, { Component } from 'react';

export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          onChange={e => onChange(e.target.value)}
          value={value}
        ></input>
      </label>
    );
  }
}
