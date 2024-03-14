/////File system
const fs = require('fs');
// Creating a new file
fs.writeFile('example.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error creating file:', err);
  } else {
    console.log('File created successfully.');
  }
});

// Reading a file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);
  }
});

// Updating a file
fs.appendFile('example.txt', '\nThis is an update.', (err) => {
  if (err) {
    console.error('Error updating file:', err);
  } else {
    console.log('File updated successfully.');
  }
});

// Deleting a file
fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully.');
  }
});

//Copy a file
fs.copyFileSync('example.txt','anotherone.txt');

//Rename a file
fs.renameSync('anotherone.txt','youkoso.txt');

//Readfiles of folder
const dir = fs.readdirSync(__dirname);
console.log(dir);

//folder creation 
fs.mkdirSync('file-system');
//Putting file in a folder
fs.renameSync('exmample.txt','file-system/data.txt');

//
fs.watchFile('file-system/data.txt',()=> {
    console.log('Data file was changed')
});


/////Error handling
const fs = require('fs');

function readJSONFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Error reading JSON file: ${err.message}`));
      } else {
        try {
          const parsedData = JSON.parse(data);
          resolve(parsedData);
        } catch (parseError) {
          reject(new Error(`Error parsing JSON: ${parseError.message}`));
        }
      }
    });
  });
}

// Example usage
readJSONFile('data.json')
  .then((jsonData) => {
    console.log('Data:', jsonData);
  })
  .catch((error) => {
    console.error('An error occurred:', error.message);
  });