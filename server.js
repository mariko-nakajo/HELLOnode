// nodeのコアモジュールのhttpを使う
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    // リクエストされた処理により表示内容を分けてみる
    switch (req.url) {
        case '/about':
            msg = 'welcome about page';
            break;
        case '/company':
            msg = 'welcome my company page';
            break;
        default:
            msg = '<span style="color:blue;"><b>node js</b></span><br>';
            break;
    }
    res.write(msg + "\n");
    res.write('hello world\n');
    res.write('<br><b>request from:</b> ' + req.url);
    res.end();
});

// サーバを待ち受け状態にする
// 第1引数: ポート番号
// 第2引数: IPアドレス
server.listen(3000);
