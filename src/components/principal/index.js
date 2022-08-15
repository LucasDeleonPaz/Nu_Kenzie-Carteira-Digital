import { useState } from 'react'
import Aside from './aside/index.js'
import Header from './header/index'
import Main from './main/index'


function Principal ({findSet}) {

    const [ transation, setTransation ] = useState([])

    const entriesAside = (retorno) => {
        return setTransation([...transation, retorno])      
    }

    const removeTransation = ((retorno) => {
        const removeCard = transation.filter((elem, index) => index !== retorno ? elem : null)
        return setTransation(removeCard)
    })

    const valueTotalHeader = transation?.reduce((acc, current) => {
        return current.type === 'Despesas' ? acc - parseInt(current.value) : acc + parseInt(current.value)
    }, 0)

    return (
        <div className='container'>
            <Header findSet={findSet}/>
            <Aside entriesAside={entriesAside} valueTotal={valueTotalHeader} />
            <Main removeTransation={removeTransation} entriesTransations={transation}/>
        </div>
    )
}

export default Principal