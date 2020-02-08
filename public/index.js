import React from "react"
import ReactDOM from "react-dom"
import { Input } from "../src"

import styled from 'styled-components'

const Wrapper = styled.div`
  box-shadow: border-box;
  margin: 0;
  padding: 0;
`

const App = () => (
  <Wrapper>
    <Input
      name='inpitsmall'
      label='Input Small'
    />
    <br />
    <Input
      name='inputMedium'
      label='Input Medium'
      size='medium'
    />
    <br />
    <Input
      name='inputLarge'
      label='Input Large'
      size='large'
    />
    <br />
    <Input
      name='inputPlaceholder'
      label='Input Placeholder'
      placeholder='Informe um texto'
    />
    <br />
    <Input
      name='inputError'
      label='Input with error'
      error={true}
    />
  </Wrapper>
)

ReactDOM.render(<App />, document.getElementById("root"))