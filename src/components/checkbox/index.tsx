import React from 'react';
import styled from 'styled-components';
import { color, fontSize } from '../../styles/theme';

type CheckboxStyles = {
  fontSize?: string;
  backgroundColor?: string;
  shevronColor?: string;
};

const Field = styled.label<CheckboxStyles>`
  font-size: ${(props) => props.fontSize || fontSize.normal};

  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .checkmark {
      background-color: ${(props) => props.backgroundColor || color.background.secondary};
    }

    &:checked ~ .checkmark:after {
      display: block;
    }
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: ${(props) => props.backgroundColor || color.background.secondary};
  }

  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
    left: 7px;
    top: 3px;
    width: 10px;
    height: 15px;
    border: solid ${(props) => props.shevronColor || color.background.white};
    border-width: 0 4px 4px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

interface ICheckbox {
  label?: string;
  checked?: boolean;
  styles?: CheckboxStyles;
}

export const Checkbox: React.FC<ICheckbox> = ({ label, checked, styles }) => {
  return (
    <Field {...styles}>
      {label}
      <input type="checkbox" checked={checked} />
      <span className="checkmark"></span>
    </Field>
  );
};
