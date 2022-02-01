import './App.css';
import {useState} from 'react';
import Header from './components/header';
import Star from './components/Star';

function App() {
  const [counter, setCounter] = useState(0);

  const updateStars = [];
  for( let starKey = 0; starKey < counter; starKey++){
    updateStars.push(<Star key={starKey}/>)
  }
  return (
    
    <div className="App">
      <Header/> 
        <div style={{
          display: 'flex', 
          justifyContent: 'space-between', 
          marginTop: 10, 
          marginLeft: "30%", 
          marginRight: "30%"}}>
          <button onClick={()=> setCounter(counter - 1)}>Remove</button>
          <div style={{fontWeight: 'bold'}}>{counter}</div>
          <button onClick={()=> setCounter(counter + 1)}>Add</button>
        </div>
        <div style={{display: 'flex',marginTop: 10}}>
          {updateStars}
        </div>
    </div>
  );
}

export default App;
