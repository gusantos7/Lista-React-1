function Status(props) {
    return (
        props.online ? <h3 id="online">Usuário Online</h3> : <h3 id="offline">Usuário Offline</h3>
    )
}

export default Status;