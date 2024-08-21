import "./Navbar.css"
const Navbar = (props) => {
    return (
        <>
        <ul class="main-nav">
            <li>{props.admin}</li>
            <li>{props.pages}</li>
            <li>{props.charts}</li>
            <li>{props.tables}</li>
        </ul>
        <ul class="user">
            <li>{props.user}<img src="./img/user.jpg" alt=""/></li>
        </ul>
        </>
    )
}

export default Navbar