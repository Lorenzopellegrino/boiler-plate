import Ficha from "../Ficha/Ficha"
const FichasGrid = () => {
    return (
        <section className = "top-data">
            <Ficha titulo = "Products in database" dato = "135" icon = "fa-clipboard-list"/>
            <Ficha titulo = "Amount in product" dato = "$g46.634" icon = "fa-dollar-sign"/>
            <Ficha titulo = "Quantity in user" dato = "90" icon = "fa-user"/>
        </section>
    )
}

export default FichasGrid