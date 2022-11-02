import '../App.css';
import { TfiFaceSad } from 'react-icons/tfi'
import { IconContext } from 'react-icons';

function ErrorFallback({error, resetErrorBoundary}){
    return(
        <div role="alert" className='App'>
        <p>
            <h3> Sorry! <IconContext.Provider value={{ size: '1rem', color: '#000'}}>
                    <TfiFaceSad />
                </IconContext.Provider></h3>
            Something went wrong:
        </p>
        <pre className='error-msg'><h3> {error.message} </h3></pre>
        <button className="error-btn"
            onClick={resetErrorBoundary}
        >
           Please try again
        </button>
      </div>
    )
}

export default ErrorFallback