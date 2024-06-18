import { Hourglass } from 'react-loader-spinner'
import './Loading.css'

function Loading(){
    
    return(
        <div className="container-loading">
            <div className="text-loading">Aguardando servidor... <br></br>Isso pode demorar um pouco.</div>
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass="loading-hourglass"
                colors={['#454545', '#454545']}
            />
        </div> 

    )
}

export default Loading