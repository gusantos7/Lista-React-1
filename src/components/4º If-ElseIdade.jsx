function Idade(props) {
    if (props.idade >= 18) {
        return (
            <div className="maiorIdade">
                <h3>Você é adulto</h3>
            </div>
        );
    } else
        if (props.idade < 18) {
            return (
                <div className="menorIdade">
                    <h3>Você é menor de idade</h3>
                </div>
            );
        }
}

export default Idade;