import React, {Component} from 'react'

class BlogForm extends Component{
    render(){
        return(
            <div>
                <form>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required/>
                    <label htmlFor="body">Body:</label>
                    <textarea type="textarea" id="body" name="body" required></textarea>
                    <button onClick={(e)=>this.props.addPost(e)}>Add Post</button>
                </form>
            </div>
        )
            
    }
}

export default BlogForm