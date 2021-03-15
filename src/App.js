import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Content from './components/Content';

function App() {
  const [currentLaba, setCurrentLaba] = useState(0)
  const [currentType, setCurrentType] = useState(0);
  const [currentRule, setCurrentRule] = useState(0);
  const [currentDocs, setCurrentDocs] = useState(0)
  const [open, setOpen] = useState(-1)

  return (
    <div className="App">
     
     <Header setCurrentType={setCurrentType} currentDocs={currentDocs} setCurrentDocs={setCurrentDocs} currentLaba={currentLaba} setCurrentLaba={setCurrentLaba} setOpen={setOpen} setCurrentRule={setCurrentRule} currentRule={currentRule} currentType={currentType}/>
    <Content currentRule={currentRule} currentDocs={currentDocs} open={open} currentLaba={currentLaba} setOpen={setOpen} currentType={currentType}/>
    </div>
  );
}

export default App;
