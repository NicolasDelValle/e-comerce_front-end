import "./App.css";
import Footer from "./components/Footer";
import NavegationBar from "./components/NavegationBar";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <NavegationBar />
      <HomePage />

      <Footer />
    </div>
  );
}

export default App;
