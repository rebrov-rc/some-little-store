import React from 'react'
import PayContainer from './components/PayContainer'
import PayPage from './components/PayPage'
import './SASS/default.sass'

const App : React.FC  = () => {
    return (
        <div className="App">
                <PayContainer/>
        </div>
    )
}

export default App
