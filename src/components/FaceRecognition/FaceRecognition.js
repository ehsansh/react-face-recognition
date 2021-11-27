import React from 'react';

const FaceRecognition = ({imgUrl,box}) =>{
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img id="inputimage" alt="face" src={imgUrl} width="500px" height="auto" />
                <div className="boundingbox"></div>
            </div>
        </div>
    );
}

export default FaceRecognition;