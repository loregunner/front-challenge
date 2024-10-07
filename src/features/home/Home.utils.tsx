/* eslint-disable no-prototype-builtins */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

const importImages = async (imageMap: Record<string, string>) => {
    const images: Record<string, any> = {};
  
    for (const key in imageMap) {
      if (imageMap.hasOwnProperty(key)) {
        const imagePath = imageMap[key];

        images[key] = { default: imagePath }; 
      }
    }
  
    return images;
  };
  
  export default importImages;
  
  
  