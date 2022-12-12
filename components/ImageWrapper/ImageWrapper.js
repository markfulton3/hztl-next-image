import React from "react";
import Image from "next/image";

const myLoader = ({ src }) => {
  return `https://source.unsplash.com/random/1600x900?${src} || 75}`;
};

const ImageWrapper = (props) => {
  const { source, square, video, portrait, picture, hero, alignment, position } = props;

  const src = source || "Car"

 

  let classStyle = 'object-cover';
  if (alignment != null)
  {
    classStyle = `object-cover object-${alignment}`;
  }

  console.log(`Alignment is ${classStyle}`)
 
  if (video)
  {
    return (
        <div className="aspect-video overflow-hidden rounded-lg bg-gray-200" style={{position: 'relative'}}>
            <Image 
                loader={myLoader} 
                src={src} 
                alt={src} 
                fill
                className={classStyle}
            />
        </div>
          
      );
  } else if (square) {
    return (
        <div className="aspect-square overflow-hidden rounded-lg bg-gray-200" style={{position: 'relative'}} >
            <Image 
                loader={myLoader} 
                src={src} 
                alt={src} 
                fill
                className={classStyle}
            />
        </div>
          
      );
  } else if (portrait) {
    return (
        <div className="aspect-portrait overflow-hidden rounded-lg bg-gray-200" style={{position: 'relative'}} >
            <Image 
                loader={myLoader} 
                src={src} 
                alt={src} 
                fill
                className={classStyle}
            />
        </div>
          
      );
  } else if (hero) {
    return (
        <div className="aspect-hero overflow-hidden rounded-lg bg-gray-200" style={{position: 'relative'}} >
            <Image 
                loader={myLoader} 
                src={src} 
                alt={src} 
                fill
                className={classStyle}
            />
        </div>
          
      );
  } else {
    return (
        <div className="aspect-picture overflow-hidden rounded-lg bg-gray-200" style={{position: 'relative'}} >
            <Image 
                loader={myLoader} 
                src={src} 
                alt={src} 
                fill
                className={classStyle}
            />
        </div>
          
      );
  }
  
  
};

export default ImageWrapper;
