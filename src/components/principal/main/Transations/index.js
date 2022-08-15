import ButtonTrash from '../../../assets/img/ButtonTrash.svg'

function Transation ({ descriptionTransation, typeTransation, valueTransation, removeTransation, id }) {

    const data = new Date()
    const today = data.toLocaleDateString()

    return (
        <form className={ typeTransation === "Entradas" ? "card--Trasation--entradas" : "card--Trasation--despesas"}>
            <div className='card--Trasation--inf'>
                <p>{descriptionTransation}</p>
                <span>{today}</span>
                <span>{typeTransation}</span>
            </div>
            <div className='card--Trasation--other'>
                <small>R$ {valueTransation},00</small>
                <img alt="Trash Button" onClick={() => removeTransation(id)} src={ButtonTrash}/>
            </div>
        </form>
    )

}

export default Transation