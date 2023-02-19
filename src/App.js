import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
    </div>
  );
}

export default App;
