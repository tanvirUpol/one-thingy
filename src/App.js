
import { useState } from 'react';
import CustomForm from './Components/CustomForm';
import './App.css';

function App() {
  const [thing,setThing] = useState("")
  const [isCompleted,setIsCompleted] = useState(true)

  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsCompleted(false)
   
  }

 

  return (
    <main className="App">
      <div className="container">
        { isCompleted && 
        <CustomForm 
              thing={thing} 
              handleSubmit={handleSubmit}
              setThing={setThing}
        >

        </CustomForm> }
      </div>
    </main>
  );
}

export default App;
