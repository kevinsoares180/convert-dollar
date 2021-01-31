import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <h1>Conversor de Moedas</h1>
      <div className="linha">
      <Conversor moedaA="USD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="CAD" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="CAD"></Conversor>
      </div>
      <div className="linha">
      <Conversor moedaA="EUR" moedaB="BRL"></Conversor>
      <Conversor moedaA="BRL" moedaB="EUR"></Conversor>
      
      </div>
      <h1><a href="https://github.com/kevinsoares180" target="_blank" rel="noopener noreferrer">github.com/kevinsoares180</a></h1>  
    </div>
  );
}

export default App;
