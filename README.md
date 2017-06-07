# gulp 導入用 テンプレート（社内研修などにも)

## 使い方
1.  各種インストール
2.  Gulpの起動

## 1. 各種インストール

### 1-1. Git for windows のダウンロード  

![git for windows](https://git-for-windows.github.io/img/git_logo.png)

→ https://git-scm.com/downloads/  

### 1-2. nodejsのインストール  

![nodejs](https://nodejs.org/static/images/logo.svg)

→ https://nodejs.org/download/  

##### ※windows の場合は`nodist`をインストールして、Nodejsのバージョン管理をおススメ  

→ 参考URL http://qiita.com/yokoh9/items/20d6bdc6030a3a861189  

インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  

``` bash
// nodejsの確認
$ node -v
v4.4.5

// npmの確認
$ npm -v
v3.7.1
```

### 1-3. Gulpをグローバルにインストール  

`npm install -g gulp`をコマンドツールで入力  
  
インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  

``` bash
// Gulp本体をグローバルにインストール
$ npm install -g gulp

// インストール後に動作するかの確認
$ gulp -v
CLI version 3.9.0
```

## 2.Gulpの起動

### 2-1. 今回使用する`gulp-template`をダウンロードして、作業フォルダに配置する。  
ダウンロードURL https://github.com/yama-dev/gulp-template/releases/latest

<br>

2-2. npmを使用してモジュールをインストール  
※以下のコマンドで、`package.json`に記述されたモジュールがインストールされる。
``` bash
// 作業ディレクトリに移動してから
npm install
```

<br>

2-3. Gulpを起動  
以下のコマンドツールで以下を入力
``` bash
gulp
```

---

### Gulpのタスク
通常の起動  
```bash
gulp
```
- サーバーの起動
- htmlファイルの構文チェック
- Sassファイルのコンパイル
- 各種ファイルの監視
- ブラウザリンク、リロード

<br>

Sassファイルのコンパイル  
```bash
gulp sass
```

<br>

HTMLファイルの構文チェック  
```bash
gulp htmllint
```

<br>

ファイルのリリース  
```bash
gulp release
```
- 公開ファイルのみを`/release/`ディレクトリにまとめる。

<br>

---

### 主な仕様
 * Gulp
   * Sass(SCSS記法)
   * HTML Hint
   * Gulp-Notify
   * Browser-Sync

---

### ファイル構造
```html
root  
│  .gitignore
│  gulpfile.js
│  package.json
│
└─src
   │  index.html
   │  sns.html
   │
   └─assets
       ├─css
       │      style.scss
       │      _reset.scss
       │      _util.scss
       │
       └─js
           └─vender
                   jquery-3.1.0.min.js
```
