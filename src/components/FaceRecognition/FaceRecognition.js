import React from 'react';

const FaceRecognition = ({imgUrl}) =>{
    return(
        <div className="center ma">
            <div className="absolute mt2">
                <img alt="face" src={imgUrl} width="500px" height="auto" />
            </div>

        </div>
    );
}

export default FaceRecognition;