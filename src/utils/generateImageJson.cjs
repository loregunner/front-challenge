const fs = require('fs');
const path = require('path');

const folderPath = path.resolve('/Users/lorenarippe/Documents/Repositorios/front-challenge/src/assets/sanrio');

async function generateImageJson() {
  try {
    const files = await fs.promises.readdir(folderPath);
    
    const imageJson = files.reduce((acc, file) => {
      const ext = path.extname(file);
      const fileName = path.basename(file, ext);

      if (['.png', '.jpg', '.jpeg', '.gif'].includes(ext.toLowerCase())) {
        acc[fileName] = path.join('../assets/sanrio', file);
      }
      return acc;
    }, {});

    await fs.promises.writeFile(
      path.join(folderPath, 'images.json'),
      JSON.stringify(imageJson, null, 2)
    );

    console.log('JSON de imágenes generado correctamente:', imageJson);
  } catch (error) {
    console.error('Error al generar el JSON:', error);
  }
}

generateImageJson();
