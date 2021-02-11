import React, {Component, component} from 'react'

class Projects extends Component{
    render(){
        return(
            <div>
                <h1>Projects</h1>
                <p>The projects are listed below:</p>
                <h3>Project XXX</h3>
                <img alt='screengrab of project null' src='https://www.placecage.com/c/600/200'/>
                <p>Best project you'll see. Uses these technologies</p>
                <ul>
                    <li key='key1'>Computer</li>
                    <li key='key2'>Internet</li>
                    <li key='key3'>You</li>
                </ul>
            </div>
        )
            
    }
}

export default Projects