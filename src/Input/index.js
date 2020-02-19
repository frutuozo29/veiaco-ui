import React, { memo } from 'react'

import PropTypes from 'prop-types'

import useStyles from './styles'

export const Input = ({ name, label, placeholder, required, error, size, onChange, ...props }) => {
  const classes = useStyles({
    error,
    size,
  })

  return (
    <div className={classes.contentInput}>
      <label className={classes.label}>{label} {!!required && <span>*</span>}</label>
      <input
        name={name}
        className={classes.input}
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        {...props}
      />
    </div>
  )
}

Input.propTypes = {
  /** 
   * property to inform name for input 
   * */
  name: PropTypes.string.isRequired,
  /** property to inform label for input */
  label: PropTypes.string,
  /** property to inform placeholder for input */
  placeholder: PropTypes.string,
  /** property to inform whether input is required */
  required: PropTypes.bool,
  /** property to inform size of input */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** property to inform value of input */
  value: PropTypes.any,
  /** property to inform if input is invalid */
  error: PropTypes.bool,
  /** property to inform event change */
  onChange: PropTypes.func,
}

Input.defaultProps = {
  label: '',
  placeholder: '',
  required: false,
  size: 'small',
  error: false
}

export default memo(Input)
