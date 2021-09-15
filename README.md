エコ・ラッピング開発用レポジトリ


スマホで見ると、元画面はARマーカーになり、パソコンで見ると、カメラがない状態でweb画面で確認出来るようになるという機能がほしい。

if パソコン画面{
    canvas AR画像 ＋ARマーカー
} スマホ画面{
    camera
}

### 開発手順

node 12.22.6 
``` npm install ```
でnodemoduleの中身がインストールされる。a-frameがインストール出来る。

chromeでデバッグするため、一部VSコード拡張機能が必要

**必須拡張機能 **
[Deprecated] Debugger for Chrome
Live Server


**利用拡張機能**

HTML CSS Support
Japanese Language Pack for Visual Studio Code
JavaScript (ES6) code snippets
Kite AutoComplete AI Code: Python, Java, Go, PHP, C/C#/C++, Javascript, HTML/CSS, Typescript, React, Ruby, Scala, Kotlin, Bash, Vue, React
Prettier - Code formatter
vscode-icons


## スマホ側の開発 


## web側 website ブランチ 
ファイル構成

```
─assets
│  ├─css
│  ├─img
│  └─models <3Dmodel>
│      
-public
│  └─aframe-japanese-font <日本語textを使えるようにするmodele>
│  |  └─fonts
|  │  About.html <site用>
|  │  Contact.html <site用>
|  │  Home.html <site用>
|  │  index.html <デバッグ用>
|  │  index2.html <site用>
|  │  index3.html <メモ用>
|  │  qrcode.html <メモ用>
│        
└─src
|    ├─data <日本語フォント>
|    └─qrcodejs-master <qrコード変換のjquery>
|    │  App.js　<メインコード>
|    │  jquery.js 
|    │  nicepage.js <site用>
|    │  qrcode.js   <メモ用>
```

