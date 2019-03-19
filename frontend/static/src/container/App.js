import React, { Component } from 'react';
import './App.css';
import ImageUpload from '../components/Form'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts:[]
        };

        this.addPost=this.addPost.bind(this);
    }

    addPost(post) {
        let formData = new FormData();
        formData.append("image", post.image);
        formData.append("blog", post.blog);


        const conf = {
            method: "POST",
            body: formData,

        };


        fetch('/api/images/', conf).then((response) => {
            return response.json();
            // console.log("working", JSON);
        }).then((json) => {

            let posts = this.state.posts
            posts.push(json)

            this.setState({posts: posts})
            console.log("working", json);

            console.log('post worked', );
        });
    };

  render() {
      let posts = this.state.posts.map(post=>{
          return(
              <div>I am a post</div>
          )
      })
    return (
        <div className="App">
          <ImageUpload addPost={this.addPost}/>
            {posts}
        </div>
    );

  }

}

export default App;







