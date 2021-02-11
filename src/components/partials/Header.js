import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <header>
                <nav>
                    <Link to="/">HomePage</Link>{' | '}
                    <Link to="/blog">Blog</Link>{' | '}
                    <Link to="/about">About</Link>{' | '}
                    <Link to="/projects">Projects</Link>
                </nav>
            </header>
        )
    }
}

export default Header