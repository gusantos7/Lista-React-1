import { useState } from 'react'
import './App.css'
import Simples from './components/1º Simples'
import PropSimples from './components/2º PropSimples'
import CondicionalIf from './components/3º CondicionalIf'
import Idade from './components/4º If-ElseIdade'
import Estudante from './components/5º If-ElseEstudante'
import Nota from './components/6º If-ElseNota'
import Desconto from './components/7º TernarioDesconto'
import Status from './components/8º TernarioOnline'
import Botao from './components/10º Botao'
import Nivel from './components/9º TernarioNivel'

function App() {

  return (
    <>
     <h1 id='titulo'>1º Lista de exercícios</h1>
    <Simples />
    <PropSimples nome="Jaja" />
    <CondicionalIf autenticado={true} />
    <Idade idade={39} />
    <Estudante estuda={false} />
    <Nota nota={99} />
    <Desconto temDesconto={false} />
    <Status online={true}/>
    <Nivel nivel='avançado' />
    <Botao logado={false}/>
    </>
  )
}

export default App