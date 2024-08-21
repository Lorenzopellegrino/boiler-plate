import Card from "../Card/Card"
const personajes = () => {
    return (
        <>
        <h2>Personajes de películas</h2>
        <section class="card-container">
            <Card nombre = "Ashoka" descripcion = "Character description bla bla bla" img = "./img/characters/ahsoka.jpg"/>
            <Card nombre = "Anakin" descripcion = "Character description bla bla bla" img = "./img/characters/anakin.jpg"/>
            <Card nombre = "Batman" descripcion = "Character description bla bla bla" img = "./img/characters/batman.jpg"/>
            <Card nombre = "Hulk" descripcion = "Character description bla bla bla" img = "./img/characters/hulkSmall.jpg"/>
        </section>  
        </>
    )
}

export default personajes