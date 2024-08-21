import Header from "./components/Header/Header"
import FichasGrid from "./components/FichasGrid/FichasGrid"
import Categorias from "./components/Categorias/Categorias";
import Footer from "./components/Footer/Footer"
import Personajes from "./components/Personajes/personajes"

function App() {
  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
    <FichasGrid/>
    <Categorias/>
    <Personajes/>
    </main>  
    
    <footer>
    <Footer/> 
    </footer>
    </>
  );
}

export default App;
