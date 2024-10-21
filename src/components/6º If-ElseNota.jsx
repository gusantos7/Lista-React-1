function Nota(props) {

    if (props.nota >= 90) {
        return (
            <div className="excelente">
                <h3>Excelente!!</h3>
            </div>
        )
    } else
        if (props.nota >= 70) {
            return (
                <div className="bom">
                    <h3>Bom</h3>
                </div>
            )
        } else
            if (props.nota < 70) {
                return (
                    <div className="melhore">
                        <h3>Precisa melhorar</h3>
                    </div>
                )
            }
}

export default Nota;
