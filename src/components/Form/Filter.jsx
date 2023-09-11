import React from 'react';
import { FilterInput } from './Form.styled';
export const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <FilterInput type="text" onChange={onChange} value={value}></FilterInput>
  </label>
);
