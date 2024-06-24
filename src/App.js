import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Menu from './components/Menu';
import Stats from './components/Stats'

function App() {
  return (
    <div>
      <Header></Header>
      <div className='mainapp'>
        <Menu></Menu>
        <Stats></Stats>
      </div>
      
    </div>
  );
}

export default App;
