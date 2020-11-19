import logo from './logo.svg';
import './App.css';

// 03519F

function App() {

  let posts = 'test'
  
  return (
    <div className="App">
      <div className="blue-nav">
        <div> <b> Stone Manager </b></div>
      </div>
      
      <img src={ logo } />
      <h4>{ posts }</h4>
    </div>
  );
}

export default App;
