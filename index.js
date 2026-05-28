const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hello World</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
          display: flex; 
          justify-content: center; 
          align-items: center; 
          height: 100vh; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        }
        .container { 
          text-align: center; 
          padding: 40px; 
          background: white; 
          border-radius: 20px; 
          box-shadow: 0 10px 40px rgba(0,0,0,0.2); 
          max-width: 90%; 
        }
        h1 { 
          font-size: 3rem; 
          color: #333; 
          margin-bottom: 10px; 
        }
        p { 
          font-size: 1.2rem; 
          color: #666; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🎉 Hello, World!</h1>
        <p>欢迎访问我的Node.js服务器</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`服务器已启动！`);
  console.log(`本地访问: http://localhost:${PORT}`);
  console.log(`如需手机访问，请使用您电脑的局域网IP地址，例如: http://192.168.x.x:${PORT}`);
});
