import React from 'react';
import { render } from 'react-dom';
import GalleryPicker from '../../src/index';

const IMG1 = "../assets/images/1.jpg"

const App = () => {
    const getImages = images => {
        console.log(images);
    }
    const imageList = [IMG1]

    return <GalleryPicker imagesRecived={imageList} returnImages={getImages} />;
};


render(<App/>, document.getElementById("root"));