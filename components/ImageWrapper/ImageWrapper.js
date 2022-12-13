import React from "react";
import Image from "next/image";

const myLoader = ({ src }) => {
   return `https://source.unsplash.com/random/1600x900?${src} || 75}`;
  };

const ImageWrapper = (props) => {
  const { source, ratio, alignment, position } = props;

  const src = source || "Car"

  const fit = {
    top: `object-cover object-top`,
    bottom: `object-cover object-bottom`,
    left: `object-cover object-left`,
    center: `object-cover object-center`,
    leftTop: `object-cover object-left-top`,
    rightTop: `object-cover object-right-top`,
    leftBottom: `object-cover object-left-bottom`,
    rightBottom: `object-cover object-right-bottom`,
  }
  
  const classWrap = `aspect-${ratio} overflow-hidden rounded-lg bg-gray-200`

  let classStyle = 'object-cover';
  if (alignment != null)
  {
    classStyle = `object-cover object-${alignment}`;
  }

  console.log(`Alignment is ${classStyle}`)
 
  return (
    <div className={classWrap} style={{position: 'relative'}}>
        <Image 
            loader={myLoader} 
            src={src} 
            alt={src} 
            fill={true}
            className={classStyle}
            priority={true}
        />
    </div>
  );
  
  
};

export default ImageWrapper;
