const https = require('https');
const fs = require('fs');

// Fetch list of dog breeds from API
https.get('https://dog.ceo/api/breeds/list/all', (res) => {
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => {
    try {
      const data = JSON.parse(rawData);
      const breeds = Object.keys(data.message);

      // Select three random breeds
      const selectedBreeds = [];
      while (selectedBreeds.length < 3) {
        const breed = breeds[Math.floor(Math.random() * breeds.length)];
        if (!selectedBreeds.includes(breed)) {
          selectedBreeds.push(breed);
        }
      }

      // Fetch image for each breed
      const imageUrls = [];
      selectedBreeds.forEach((breed) => {
        https.get(`https://dog.ceo/api/breed/${breed}/images/random`, (res) => {
          let rawData = '';
          res.on('data', (chunk) => { rawData += chunk; });
          res.on('end', () => {
            try {
              const data = JSON.parse(rawData);
              const imageUrl = data.message;
              imageUrls.push(imageUrl);

              // Write image URL to file
              if (imageUrls.length === selectedBreeds.length) {
                const output = imageUrls.map((url, index) => `${url} (${selectedBreeds[index]})`).join('\n');
                fs.writeFile('dog_images.txt', output, (err) => {
                  if (err) throw err;
                  console.log('Image URLs written to dog_images.txt');
                });
              }
            } catch (e) {
              console.error(e.message);
            }
          });
        }).on('error', (e) => {
          console.error(e.message);
        });
      });
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(e.message);
});
