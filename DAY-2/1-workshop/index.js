const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpeg');
  res.end('Hello, Digistar!\n');
});

// const server = http.createServer((req, res) => {
//   const imageUrl = 'https://media.geeksforgeeks.org/wp-content/uploads/geeksforgeeks-6.png'
//   https.get(imageUrl, (imageRes) => {
//     res.writeHead(200, { 'Content-Type': 'image/jpeg' });
//     imageRes.pipe(res); // Mengalirkan konten gambar ke response
//   }).on('error', (err) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.end('Error fetching image');
//   })
// });

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});

server.listen(3000, () => {
  console.log('Server running at http://127.0.0.1:3000/');
});