import React, { memo } from 'react'

import PropTypes from 'prop-types'

import { ContentInput, Label, InputStyled } from './styles'

export const Input = ({ name, label, placeholder, required, error, size, onChange, ...props }) => {
  const padding = (size === 'medium' && '.375rem .75rem') || (size === 'large' && '.5rem 1rem') || '.25rem .5rem'
  const fontSize = (size === 'medium' && '1rem') || (size === 'large' && '1.25rem') || '.875rem'

  return (
    <ContentInput>
      <Label>{label} {!!required && <span>*</span>}</Label>
      <InputStyled
        placeholder={placeholder}
        aria-label={label}
        onChange={onChange}
        error={error}
        {...props}
        padding={padding}
        fontSize={fontSize}
      />
    </ContentInput>
  )
}

Input.propTypes = {
  // property to inform name for input
  name: PropTypes.string.isRequired,
  // property to inform label for input
  label: PropTypes.string,
  // property to inform placeholder for input
  placeholder: PropTypes.string,
  // property to inform whether input is required
  required: PropTypes.bool,
  // property to inform size of input
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  // property to inform value of input
  value: PropTypes.any,
  // property to inform if input is invalid
  error: PropTypes.bool,
  // property to inform event change
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
