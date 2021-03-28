import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"
import NavigationBar from "./components/layout/NavigationBar"

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Home/>
    </div>
  );
}

export default App;
