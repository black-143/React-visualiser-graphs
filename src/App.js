import StaticGraphsHomePage from './components/static-graphs/static-graphs-home';
import './App.css';
import {
  Routes,
  Route
 
} from "react-router-dom";
import HomePage from './components/home-page/home-page';
function App() {
  return (
      <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/static-graphs" element={<StaticGraphsHomePage />}/>
      </Routes>
  );
}

export default App;