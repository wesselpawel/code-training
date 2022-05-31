import React, {useState} from 'react';
import Header from './components/Header';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <div className="app">
      <Header title="Join us!" color="black"/>
      <form>
        <MultiStepForm currentStep={currentStep}/>
      </form>
        <div className="dots-containter">
          <button className='dot-btn' id="1" onClick={() => setCurrentStep(1)}></button>
          <button className='dot-btn' id="2" onClick={() => setCurrentStep(2)}></button>
        </div>
    </div>
  );
}

export default App;
