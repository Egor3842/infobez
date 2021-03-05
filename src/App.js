import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Content from './components/Content';

function App() {
  const [currentType, setCurrentType] = useState(0);
  const [currentRule, setCurrentRule] = useState(0);
  const [open, setOpen] = useState(-1)

  return (
    <div className="App">
     
     <Header setCurrentType={setCurrentType} setOpen={setOpen} setCurrentRule={setCurrentRule} currentRule={currentRule} currentType={currentType}/>
    <Content currentRule={currentRule} open={open} setOpen={setOpen} currentType={currentType}/>
    </div>
  );
}

export default App;
