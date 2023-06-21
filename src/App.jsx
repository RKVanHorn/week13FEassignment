import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import Login from "./Login";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}
