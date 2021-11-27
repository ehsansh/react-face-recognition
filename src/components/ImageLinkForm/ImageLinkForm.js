import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onSubmitButton }) =>{
    return(
        <div>
            <p className="f3">
                This brain detects faces in your picture. Give it a try!
                <br />
                You can copy and paste this url: 
                <br />
                https://res.cloudinary.com/demo/image/upload/front_face.jpg

            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input onChange={ onInputChange } className="f2 pa2 w-70 center" type="text" />
                    <button onClick={onSubmitButton} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;