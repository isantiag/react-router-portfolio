import React, {Component, component} from 'react'

class Blog extends Component{
    render(){
        return(
            <div>
                <h1>Blog</h1>
                {this.props.posts.map((post,index)=>{
                    return (
                            <div key={`key${index}`}>
                                <p>Title:{post.title}</p>
                                <p>Body:{post.body}</p>
                            </div>
                    )        
                })}
            </div>
        )
            
    }
}

export default Blog