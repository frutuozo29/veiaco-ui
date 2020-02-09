import styled from 'styled-components'

import colors from '../colors/colors.json'

const OutlineButton = (outline, color) => {
  if (outline) {
    return `
      border: 1px solid ${color};
      background-color: #fff;
      color: ${color};
      
      &:hover {
        background-color: ${color};
        color: #fff;
        box-shadow: 0 0 3px 0 #FFF;
      }
  `;
  } else {
    return `
    background-color: ${color};
    color: #fff;
  `;
  }
};

const TypeButton = (typeButton, outline) => {
  switch (typeButton) {
    case "primary":
      return OutlineButton(outline, colors.primary);
    case "danger":
      return OutlineButton(outline, colors.danger);
    case "info":
      return OutlineButton(outline, colors.info);
    case "success":
      return OutlineButton(outline, colors.success);
    default: {
      return OutlineButton(outline, colors.default);
    }
  }
};

export const ButtonStyled = styled.button`
  border: none;
  padding: 10px 8px;
  color: #FFF;
  font-weight: 700;
  border-radius: ${({ rounded }) => (rounded ? '30px' : '5px')};
  outline: none;
  cursor: pointer;
  width: ${({ width }) => width || 'max-content'};
  ${({ typeButton, outline }) => TypeButton(typeButton, outline)};

  &:hover {
    box-shadow: 0 0 3px 0 #FFF;
  }

  &:active {
    box-shadow: 0 0 3px 0 #FFF inset;
  }
`
