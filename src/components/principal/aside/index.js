import { useState } from 'react'

function Aside ({entriesAside, valueTotal}) {

    const [ descript, setDescript ] = useState()
    const [ valor, setValor ] = useState()
    const [ type, setType] = useState('Entradas')
    const obj = {}

    const change = () => {
        obj.description = descript
        obj.value = valor 
        obj.type = type
        entriesAside(obj)
    }

    return (
        <div className='principal--aside'>
            <div className='asideP' >
                <div className='asideP--text'>
                    <p className='asideP--p'>Descrição</p>
                    <input onChange={(x)=> setDescript(x.target.value) } className="asideP--input"  placeholder="Digite aqui sua descrição"></input>
                    <small className='asideP--small'>Ex: Compra de roupas</small>
                </div>
                <div className="asideP--others">
                    <div className="asideP--others--">
                        <p className='asideP--p'>Valor</p>
                        <input onChange={(x)=> setValor(x.target.value) } className="asideP--input--others" placeholder="R$"></input>
                    </div>
                    <div className="asideP--others--">
                        <p className='asideP--p'>Tipo de valor</p>
                        <select className="asideP--opt--others" onChange={(x)=> setType(x.target.value)}>
                            <option >Entradas</option>
                            <option >Despesas</option>
                        </select>
                        
                    </div>
                </div>
                <button onClick={change} className='asideP--button'>Inserir valor</button>            
            </div>
            <div className="aside--total">
                <div className="aside--total--valor">
                    <p className='asideP--total--p'>Valor total:</p>
                    <p className='asideP--value'>R$ {valueTotal || 0},00</p>
                </div>
                <div className="aside--total--valor">
                    <small className='asideP--small'>*O valor se refere ao saldo</small>
                </div>
            </div>
        </div>
    )

}

export default Aside