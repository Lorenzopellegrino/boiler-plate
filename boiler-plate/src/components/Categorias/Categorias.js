import "./Categorias.css"
import Categoria from "../Categoria/Categoria"
const Categorias = () => {
    return (
        <>
        <h2>Categories in database</h2>
        <section className="general-data">
           <Categoria categoria = "Category 1"/>
           <Categoria categoria = "Category 2"/>
           <Categoria categoria = "Category 3 "/>
           <Categoria categoria = "Category 4"/>
           <Categoria categoria = "Category 5"/>
           <Categoria categoria = "Category 6 "/>
           
        </section>
        </>
    )
} 
export default Categorias