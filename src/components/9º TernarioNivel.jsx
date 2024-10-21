function Nivel(props) {
    return (
        props.nivel == "iniciante" ? <h3 id="iniciante">Bem-vindo Iniciante!</h3>
            :
            props.nivel == "intermediário" ? <h3 id="intermediario">Você está progredindo!</h3>
                :
                props.nivel == "avançado" ? <h3 id="avançado">Parabéns, especialista!</h3>
                : <h3>Insira o seu nivel</h3>
    )
}

export default Nivel;