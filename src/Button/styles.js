import { createUseStyles } from 'react-jss'

import colors from '../colors/colors.json'

const getOutlineButton = (outline, color) => {
  if (outline) {
    return ({
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: color,
      backgroundColor: '#FFF',
      color,
      '&:hover': {
        backgroundColor: color,
        color: '#FFF',
        boxShadow: '0 0 3px 0 #FFF'
      }
    })
  } else {
    return ({
      backgroundColor: color,
      color: '#FFF',
    })
  }
};

const getStylesFromType = (type, outline) => {
  switch (type) {
    case "primary":
      return getOutlineButton(outline, colors.primary);
    case "danger":
      return getOutlineButton(outline, colors.danger);
    case "info":
      return getOutlineButton(outline, colors.info);
    case "success":
      return getOutlineButton(outline, colors.success);
    default: {
      return getOutlineButton(outline, colors.default);
    }
  }
};

export default createUseStyles({
  button: props => {
    const styles = getStylesFromType(props.type, props.outline)

    return ({
      border: 'none',
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 8,
      paddingRight: 8,
      fontWeight: 700,
      borderRadius: props.rounded ? 30 : 5,
      outline: 'none',
      cursor: 'pointer',
      width: 'max-content',
      '&:hover': {
        boxShadow: '0 0 3px 0 #FFF'
      },
      '&:active': {
        boxShadow: '0 0 3px 0 #FFF inset'
      },
      ...styles
    })
  }
})
