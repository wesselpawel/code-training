import React, {useState} from 'react';
import Header from './components/Header';
import MultiStepForm from './components/MultiStepForm';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  return (
    <>
    <div className="background"></div>
      <div className="app">
        <div className="form-wrapper">
          <Header title="Join us!" color="black"/>
          <form>
            <MultiStepForm currentStep={currentStep}/>
          </form>
            <div className="nav-containter">
              {currentStep === 1 ? (
                <button className='navigate-btn' onClick={() => setCurrentStep(2)}>Next</button>
              ) : (
                <button className='navigate-btn' onClick={() => console.log("submitted a form")}>
                  Submit
                </button>
              )}
              <div className="dots">
                <button className={currentStep === 1 ? 'dot-btn current' : 'dot-btn'} onClick={() => setCurrentStep(1)}></button>
                <button className={currentStep === 2 ? 'dot-btn current' : 'dot-btn'} onClick={() => setCurrentStep(2)}></button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
