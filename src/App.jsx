import './App.css'
import { Button } from './assets/components/form/Button'
import { Input } from './assets/components/form/input'

function App() {
  return (
    <form>
      <Input type={"text"} id={"text"} name={"text"} label={"Name"}/>
      <Input type={"email"} id={"email"} name={"email"} label={"Email"}/>
      <Input type={"tel"} id={"tel"} name={"tel"} label={"Phone"}/>
      <Button type={"submit"} label={"Submit"}/>
    </form>
  )
}

export default App
