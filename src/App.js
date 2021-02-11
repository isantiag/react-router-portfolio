import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import Blog from './components/pages/Blog'
import BlogForm from './components/pages/BlogForm'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
import Header from './components/partials/Header';
import './App.css';

class App extends Component{
  addPost = (e) =>{
    e.preventDefault()
    console.log('Add Post')
    console.log(e.target)
  }

  render(){
    let posts = [
      {
        title: 'I love plants',
        body: 'Especially the calatheas, but they don\'t love me back 😭'
      },
      {
        title: 'Computers amirite?',
        body: 'Dumb, just like me'
      },
      {
        title: 'Gratitude is a key to happiness',
        body: 'thanks pete'
      }
    ]
    
    return (
      <Router>
          <div className="App">
            <Header />
            <Route exact path="/" component={Homepage} />
            <Route path="/blog" render={()=><Blog posts={posts}/>} />
            <Route path="/blog/new" render={()=><BlogForm addPost={this.addPost}/>} />
            <Route path="/about" component={About}/>
            <Route path="/projects" component={Projects}/>
          </div>
        </Router>
    );
  }
}

export default App;
