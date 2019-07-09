import React from 'react';
import { render } from 'react-dom';
import GalleryPicker from '../../src/index';

const IMG1 = "public/assets/images/1.jpg";
const IMG2 = "public/assets/images/2.jpg";
const IMG3 = "public/assets/images/3.jpg";

const App = () => {
    const getImages = images => {
        console.log(images);
    }
    const imageList = [IMG1, IMG2, IMG3];

    return <GalleryPicker imagesRecived={imageList} returnImages={getImages} />;
};


render(<App />, document.getElementById("root"));