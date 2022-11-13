import React, {useState} from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  // 6X0ObwkA7xxemcfYGVjDPGiIhJ8cWqlxaOsMn-fk9r8
  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=6X0ObwkA7xxemcfYGVjDPGiIhJ8cWqlxaOsMn-fk9r8&query=${value}&orientation=squarish`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }
  return (
    <div className="App">
      <div className='mydiv'>
        <span>Pesquisar: </span>
        <input 
        style={{width: "60%", fontSize: "18px"}}
        type='text' 
        value={value} 
        onChange={(e)=>setValue(e.target.value)}/>
        <button onClick={()=> fetchImages()}>Enviar</button>
      </div>
      <div className='gallery'>
        {
          results.map((item)=> {
            return <img className='item' key={item.id} src={item.urls.regular} />
          })
        }
      </div>
    </div>
  );
}

export default App;
