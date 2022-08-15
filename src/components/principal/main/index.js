import NoCard from '../../assets/img/NoCard.svg'
import Transation from "./Transations/index"
import { useState } from 'react'

function Main ({ entriesTransations, removeTransation }) {

    const [ buttonsNav, setButtonsNav ] = useState('Todos')


    return (
        <section className="principal--main">
            <div className="principal--main--header">
                <p>Resumo financeiro</p>
                <nav className="main--header--nav">
                    <li onClick={(x)=> setButtonsNav(x.target.textContent)} className={buttonsNav === 'Todos' ? "header--nav--set--togle" : "header--nav--set" }>Todos</li>
                    <li onClick={(x)=> setButtonsNav(x.target.textContent)} className={buttonsNav === 'Entradas' ? "header--nav--set--togle" : "header--nav--set" }>Entradas</li>
                    <li onClick={(x)=> setButtonsNav(x.target.textContent)} className={buttonsNav === 'Despesas' ? "header--nav--set--togle" : "header--nav--set" }>Despesas</li>
                </nav>
            </div>
            {entriesTransations[0] != undefined ? (<div className="principal--main--transations">
                {buttonsNav === 'Todos' ? entriesTransations.map((x,y) => {
                    return <Transation removeTransation={removeTransation} id={y} key={y} descriptionTransation={x.description} typeTransation={x.type} valueTransation={x.value}/>
                }): buttonsNav === 'Entradas' ? entriesTransations.map((x,y) => {
                    return x.type === "Entradas" ? <Transation id={y} removeTransation={removeTransation} key={y} descriptionTransation={x.description} typeTransation={x.type} valueTransation={x.value}/>
                : null}): buttonsNav === 'Despesas' ? entriesTransations.map((x,y) => {
                    return x.type === "Despesas" ? <Transation id={y} removeTransation={removeTransation} key={y} descriptionTransation={x.description} typeTransation={x.type} valueTransation={x.value}/>
                : null}): null}                
            </div>) : <div className="principal--main--noEntries">
                        <p>Você ainda não possui nenhum lançamento</p>
                        <img src={NoCard}></img>
                    </div> }
        </section>
    )
}

export default Main