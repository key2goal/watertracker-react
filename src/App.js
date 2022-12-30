import logo from './logo.svg';
import fillglass from './images/fill_glass.png';
import emptyglass from './images/empty_glass.png';
import './App.css';
import {useState} from 'react';
import FullGlass from './component/FullGlass';
import EmptyGlass from './component/EmptyGlass';


function App() {

  const options = [
    {value: '', text: '--Choose an option--'},
    {value: '1', text: '1'},
    {value: '2', text: '2'},
    {value: '3', text: '3'},
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [selectedimage, setFillGlass] = useState(FullGlass);

  const handleChange = event => {
    console.log(event);
    setSelected(event.target.value);
    for (let i = 0; i < event.target.value; i++) {
      setFillGlass(FullGlass);
    } 
    
    //event.target.src = {emptyglass};
  };
  
  return (
      <div className='App'>
      <header className="App-header">
            <div className="brandname">Water Tracker</div>
        </header>
        <main> 
            <div className="user-section">Hello. Ranjan Daswani</div>
            <h3>Today's Date: <span id="today-date">30 Dec 2022</span> </h3>
            <div className="form">
                <div className="glass-form">
                  <label htmlFor='glass'>Please choose how many glass of water you want to drink in a day ?</label>                        
                    <select value={selected} onChange={handleChange}>
                      {options.map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                      ))}
                    </select>
                </div>
                <div className="glass-image" id="glass_image">
                    {selectedimage}
                </div>
            </div>
        </main>
        <footer>
            <div className="footer-section">@ copyright by <a href="https://www.key2goal.com">key2goal.com</a></div>
        </footer>
      </div>
  );
}

export default App;
