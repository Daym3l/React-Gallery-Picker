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
    const imageList = [{ url: IMG1, name: "imagen 1" },{ url: IMG2, name: "imagen 2" } ,{ url: IMG3, name: "imagen 3" } ];

    return <GalleryPicker imagesRecived={imageList} returnImages={getImages} />;
};


render(<App />, document.getElementById("root"));