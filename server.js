console.log("Hello World!\n==========\n");

// Node.js Modules Exercise
import http from 'http';

http.createServer(function (req, res) {
    const { method, url } = req;
    const chunks = [];

    req.on('data', (chunk) =>  {
        chunks.push(chunk);
    });

    req.on('end', () => {
        const body = Buffer.concat(chunks).toString();
        const responseBody = { method, url, body };

        if(url == '/') {
            const quote = 'This is the skin of a killer, Bella';
            res.write(`${quote}`);
        } else if(url == '/about') {
            const aboutMe = {
                name: 'Halli',
                age: 30,
                sign: 'Gemini',
                favMovie: 'Twilight'
            }
            res.write(JSON.stringify(aboutMe));
        } else if(url == '/echo') {
            res.write(JSON.stringify(responseBody));
        }
        res.end();
    });
})
.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});