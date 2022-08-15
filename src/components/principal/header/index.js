
import logoPrincial  from '../../assets/img/logo1.svg'

function Header ({findSet}) {
    return (
        <div className="header">
            <div className='header--img'>
                <img src={logoPrincial}></img>
            </div>
            <button className='header--button' onClick={()=> findSet(false)}>Inicio</button>
        </div>
    )
}

export default Header