import React, { memo } from 'react'

// prop-types
import PropTypes from 'prop-types'

// styles
import useStyles from './styles'

export const Button = ({ name, type, outline, rounded, onClick, children, ...props }) => {
  const classes = useStyles({ type, outline, rounded, ...props })

  return (
    <button
      name={name}
      className={classes.button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  /**
   * The name of Button
   */
  name: PropTypes.string.isRequired,
  /**
   * The type of Button
   */
  type: PropTypes.oneOf(["primary", "danger", "info", "success", "default"]),
  /**
   * Inform Button outline
   */
  outline: PropTypes.bool,
  /**
   * Inform Button rounded
   */
  rounded: PropTypes.bool,
  /**
   * Event click of Button
   */
  onClick: PropTypes.func
}

Button.defaultProps = {
  type: "default",
  outline: false,
  rounded: false
}

export default memo(Button)
