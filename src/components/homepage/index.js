import Aside from './aside/index'
import Section from './section/index'


function Homepage ({findSet}) {

    return (
        <div className='homepage'>
            <Aside findSet={findSet}/>
            <Section/>
        </div>
    )

}

export default Homepage