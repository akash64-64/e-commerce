import "./App.css";
import Navigation from "./customers/navigation/Navigation";
import HomePage from "./customers/Pages/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
