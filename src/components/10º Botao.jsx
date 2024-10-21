function Botao (props) {
    return (
        props.logado ? <button id="btn-sair">Sair</button> : <button id="btn-entrar">Entrar</button>
    )
}

export default Botao;