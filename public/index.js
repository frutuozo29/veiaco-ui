import React from "react"
import ReactDOM from "react-dom"
import { Input } from "../src"


const App = () => (
  <div>
    <Input
      name='inpitsmall'
      label='Input Small'
    />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))