from flask import Flask
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)

@app.route('/')
def hello_world():
    return '''
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
    <p>欢迎访问我的网页！</p>
  </div>
</body>
</html>
'''

if __name__ == '__main__':
    app.run()