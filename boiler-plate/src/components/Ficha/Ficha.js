const Ficha = (props) => {
    return (
        <article className="data-detail">
                <div class="card-content">
                    <h4>{props.titulo}</h4>
                    <p>{props.dato}</p>
                </div>
                <i className={`fas ${props.icon} fa-clipboard-list fa-2x text-gray-300`}></i>
        </article>
    )
}
export default Ficha