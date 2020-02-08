import styled from 'styled-components'

export const ContentInput = styled.div`
  display: flex;
  flex-direction: column;
   width: 100%;
`

export const Label = styled.label`
  color: #8798AD;
  font-size: 12px;
  margin-bottom: 4px;

  > span {
    color: red;
  }
`

export const InputStyled = styled.input`
  padding: ${props => props.padding};
  overflow: hidden;
  border: 1px;
  border-style: solid;
  border-color: ${props => props.error ? '#dc3545' : '#8798AD'};
  border-radius: 4px;
 
  line-height: 1.5;
  font-size: ${props => props.fontSize};
  
  &:focus {
    border-color: ${props => props.error ? '#dc3545' : '#2E5BFF'};
  }
`
