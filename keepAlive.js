const http = require('http');

function pingSelf() {
    const options = {
        host: 'personal-blog-wire.onrender.com', // כתובת הבלוג שלך
        port: 80, // אם Render מאזין ל-HTTP רגיל
        path: '/'
    };

    const startTime = new Date();
    http.get(options, (res) => {
        const endTime = new Date();
        const duration = endTime - startTime;
        console.log(`[${startTime.toISOString()}] Ping successful! Status: ${res.statusCode}, Response time: ${duration}ms`);
    }).on('error', (err) => {
        const now = new Date();
        console.error(`[${now.toISOString()}] Ping failed: ${err.message}`);
    });
}

// פינג כל 10 דקות
setInterval(pingSelf, 10 * 60 * 1000);

// מפינג פעם אחת מיד כשמתחיל
pingSelf();
