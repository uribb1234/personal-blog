const http = require('http');

function pingSelf() {
    const options = {
        host: 'localhost', // או אם אתה ב-Render: 'personal-blog-wire.onrender.com'
        port: 3000,        // הפורט שהבלוג שלך מאזין לו
        path: '/'
    };

    http.get(options, (res) => {
        console.log(`Pinged self: ${res.statusCode}`);
    }).on('error', (err) => {
        console.log('Ping failed:', err.message);
    });
}

// פינג כל 10 דקות
setInterval(pingSelf, 10 * 60 * 1000);

// מפינג פעם אחת מיד כשמתחיל
pingSelf();
