import logo  from '../../assets/img/logo.svg'

function Aside ({findSet}) {

    return (
        <div className='aside'>
            <div className='aside--img'>
                <img src={logo}></img>
            </div>
            <div className='aside--text'>
                <p>Centralize o controle das suas finanças</p>
            </div>
            <div className='aside--small'>
                <p>de forma rápida e segura</p>
            </div>
            <button onClick={()=> findSet(true)} className='aside--button'>Iniciar</button>            
        </div>
    )

}

export default Aside