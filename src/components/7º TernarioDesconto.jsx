function Desconto(props) {
    return (
        props.temDesconto ?
            <div className="desconto">
                <h3>Desconto Aplicado</h3>
            </div>
            :
            <div className="sem-desconto">
                <h3>Sem Desconto</h3>
            </div>
    )
}

export default Desconto;