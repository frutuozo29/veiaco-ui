import { createUseStyles } from 'react-jss'

export default createUseStyles({
  contentInput: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  label: {
    color: '#8798AD',
    fontSize: 12,
    marginBottom: 4,
    '&>span': {
      color: 'red'
    }
  },
  input: props => ({
    padding: (props.size === 'medium' && '.375rem .75rem') || (props.size === 'large' && '.5rem 1rem') || '.25rem .5rem',
    overflow: 'hidden',
    border: 1,
    borderStyle: 'solid',
    borderColor: props.error ? '#dc3545' : '#8798AD',
    borderRadius: 4,
    lineHeight: 1.5,
    fontSize: (props.size === 'medium' && '1rem') || (props.size === 'large' && '1.25rem') || '.875rem',
    '&:focus': {
      outline: 'none',
      borderColor: props => props.error ? '#dc3545' : '#2E5BFF'
    }
  })
})