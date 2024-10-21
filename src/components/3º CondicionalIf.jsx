function CondicionalIf(props) {

    if (props.autenticado == true) {
        return (
            <div className="bemVindoUsuario">
                <h2>Bem-vindo, usuário</h2>
            </div>
        )
    }
}

export default CondicionalIf;