// node�̃R�A���W���[����http���g��
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    // ���N�G�X�g���ꂽ�����ɂ��\�����e�𕪂��Ă݂�
    switch (req.url) {
        case '/about':
            msg = 'welcome about page';
            break;
        case '/company':
            msg = 'welcome my company page';
            break;
        default:
            msg = 'page not found';
            break;
    }
    res.write(msg + "\n");
    res.write('hello world\n');
    res.write('request from: ' + req.url);
    res.end();
});

// �T�[�o��҂��󂯏�Ԃɂ���
// ��1����: �|�[�g�ԍ�
// ��2����: IP�A�h���X
server.listen(3000);