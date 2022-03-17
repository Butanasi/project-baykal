import React from 'react';
import img1 from '../Images/1.jpg';
import img2 from '../Images/2.jpg';
import img3 from '../Images/3.jpg';
import img4 from '../Images/4.jpg';
import img5 from '../Images/5.jpg';
import img6 from '../Images/6.jpg';

const ImgSelector = ({ id }) => {
  switch (id) {
    case 'img1':
      return <img src={img1} alt="" width="185" height="200" />;
    case 'img2':
      return <img src={img2} alt="" width="185" height="200" />;
    case 'img3':
      return <img src={img3} alt="" width="185" height="200" />;
    case 'img4':
      return <img src={img4} alt="" width="185" height="200" />;
    case 'img5':
      return <img src={img5} alt="" width="185" height="200" />;
    case 'img6':
      return <img src={img6} alt="" width="185" height="200" />;

    default:
      return <img src="#" alt="" />;
  }
};

export default ImgSelector;
