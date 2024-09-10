import Checkbox from "./components/Checkbox.jsx"

function App() {

  return (
    <>
    <Checkbox mode={"basic"} />
    <Checkbox mode={"fade"} iconColor={"inherit"} fillColor={"white"} borderColor="#289310" />
    <Checkbox mode={"scale"} iconColor={"#fff"} fillColor={"black"} borderColor="#289310" />
    <Checkbox mode={"check"} iconColor={"#289310"} borderColor="#289310" />
    </>
  )
}

export default App
