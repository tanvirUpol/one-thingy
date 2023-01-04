
import { useState } from 'react';
import './App.css';

//libraies
import JSConfetti from 'js-confetti'

// components
import CustomForm from './Components/CustomForm';
import OneThing from './Components/OneThing';

const jsConfetti = new JSConfetti()



function App() {
  // states
  const [thing,setThing] = useState("")
  const [isCompleted,setIsCompleted] = useState(true)

  // functions
  const handleSubmit=(e)=>{
    e.preventDefault()
    setIsCompleted(false)
   
  }

  const handleCompletedThing = async (e) =>{
    e.target.setAttribute('disabled', true)
    setThing("Great Job!")
    await jsConfetti.addConfetti()
    e.target.removeAttribute('disabled')
    setThing("")
    setIsCompleted(true)
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

        {!isCompleted && <OneThing thing={thing} handleCompletedThing={handleCompletedThing} ></OneThing>}
      </div>
    </main>
  );
}

export default App;
