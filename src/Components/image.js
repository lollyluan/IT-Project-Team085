import React, { useState } from "react";
import ImageUploading from 'react-images-uploading';
import {encodeImage} from '../utils/image'
const UploadAndDisplayImage = () => {
    const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
   // console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
const onImageUpdate=(image)=>{
 
    console.log(image.data_url)
    encodeImage(image.data_url);
    
}
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        acceptType={["jpg"]}
        
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
           onImageRemove,
         onImageUpdate,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: "red" } : null}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
      
  }
  

export default UploadAndDisplayImage;