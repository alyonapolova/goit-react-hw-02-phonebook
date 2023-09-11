import React from 'react';

export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" onChange={onChange} value={value}></input>
  </label>
);
