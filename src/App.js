import './App.css';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from './components/RecipeList';
function App() {
  return (
    <div className="App Main">
        <Header/>
        <Navbar/>
        <RecipeList/>
        <Footer/>
    </div>
  );
}

export default App;
