const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 静的ファイルの提供
app.use(express.static(__dirname));

// ルートパスへのアクセスでindex.htmlを返す
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`プレゼンテーションサーバーが起動しました: http://localhost:${PORT}`);
  console.log('終了するには Ctrl+C を押してください');
});
