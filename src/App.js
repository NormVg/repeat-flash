import back from './backbtn.png';
import down from './downbtn.png';
import up from './upbtn.png';
import './App.css';
import { useState } from 'react';




function App() {
  const [clickedclass, setIsClicked] = useState("flashimg");
  const [card, setcard] = useState("who are you");
  const [state, setState] = useState(false);
  function abdc(){
    if (state == false){
      setIsClicked("flashimg-open");
      setcard("we are TheAlphaOnes")
      setState(true)
      return
    }
    if (state == true){
      setIsClicked("flashimg");
      setcard("who are you")
      setState(false)
      return
    }
    
  }

  return (
    <div className="App">
      <a href='https://repeat.pythonanywhere.com' className='back'><img src={back} alt="Description of the image" /></a>
      <a href='https://repeat.pythonanywhere.com' className='up'><img src={up} alt="Description of the image" /></a>
      <a href='https://repeat.pythonanywhere.com' className='down'><img src={down} alt="Description of the image" /></a>
      <div className={clickedclass} onDoubleClick={abdc}>{card}</div>
      <div className='counter'>15/54</div>
    </div>
  );
};


export default App;
