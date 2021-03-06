import React, { Component } from 'react';
import './form.css';


class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: '',
        imagePreviewUrl: null,
        caption: '',
    };
    this._handleImageChange= this._handleImageChange.bind(this)
    this._handleSubmit= this._handleSubmit.bind(this)
  }

     _handleImageChange(event) {

        event.preventDefault();
        let file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onloadend = () => this.setState({imagePreviewUrl: fileReader.result});
        fileReader.readAsDataURL(file);
        this.setState({image: file});
        console.log("image", this.state.image)

    }
    handleBlogChange(event){
      event.preventDefault();
      this.setState({caption: event.target.value})
    }


     _handleSubmit(e) {
         e.preventDefault();
        this.props.addPost(this.state)
     }


  render() {
      console.log(this.state.posts)
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} alt="imagePreview"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <form onSubmit={this._handleSubmit} id="uploadForm">
            <div>
                <input className="fileInput"
                type="file"
                onChange={(e)=>this._handleImageChange(e)} /><br/>
            </div>
            <div id='textAndButton'>
                <input id="blogText" name="blog" type='text' onChange={(e)=>this.handleBlogChange(e)} placeholder="Trip details"/><br/>
                <button className="submitButton"
                type="submit">Upload Image</button>
            </div>
            <div className="imgPreview">
                {$imagePreview}
            </div>
            <div>
                <p>{this.state.caption}</p>
            </div>
        </form>
    )
  }
}

export default ImageUpload;







