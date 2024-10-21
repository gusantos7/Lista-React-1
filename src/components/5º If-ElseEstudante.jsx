function Estudante(props) {
    if (props.estuda == true) {
        return (
            <div className="estudante">
                <h3>Você é um estudante</h3>
            </div>
        )
    } else {
        return (
            <div className="naoEstudante">
                <h3>Você não é um estudante</h3>
            </div>
        )
    }
}

export default Estudante;