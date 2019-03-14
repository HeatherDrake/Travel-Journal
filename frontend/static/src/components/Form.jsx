import React, { Component } from 'react';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: '',
        imagePreviewUrl: ''
    };
    this._handleImageChange= this._handleImageChange.bind(this)
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);



  }

  // _handleImageChange(e) {
  //   e.preventDefault();
  //
  //   let reader = new FileReader();
  //   let file = e.target.files[0];
  //
  //   reader.onloadend = () => {
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result
  //     });
  //   }
  //
  //   reader.readAsDataURL(file)
  // }

     _handleImageChange(event) {

        event.preventDefault();
        let file = event.target.files[0];
        let fileReader = new FileReader();
        fileReader.onloadend = () => this.setState({imagePreviewUrl: fileReader.result});
        fileReader.readAsDataURL(file);
        this.setState({image: file});

    }


    submitImage(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("image", this.state.image);


        const conf = {
            method: "POST",
            body: formData,

        };


        fetch('/api/', conf).then((response) => {
            return response.json();
        }).then((json) => {

            let imageCollection = [...this.state.imageCollection];
            imageCollection.push(json);


            this.setState({imageCollection});
            this.setState({image_preview: ""});

            console.log('added', imageCollection);
        });
    };

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="previewComponent">
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput"
            type="file"
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton"
            type="submit" >Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    )
  }
}

export default ImageUpload;