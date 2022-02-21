import logo from './logo.svg';
import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import Info from './components/Info';

function App() {
  return (
    <>
      <Navbar />    
      <div className="container">
        <div className="row">
          <Info />
        </div>
      </div>
    </>
  );
}

export default App;
