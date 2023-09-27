import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/sessions");
      const data = await response.json()
      console.log(data);
      // try changing the file and save it. Now check the console. It logs!
      // Now reload...
      //  You will see the error 
      // Uncaught (in promise) SyntaxError: Unexpected token '<', "<!doctype "... is not valid JSON
    };
    getData();
  }, []);
  return (
    <>
      <h1>MSW possible ES6 bug</h1>
    </>
  )
}

export default App
