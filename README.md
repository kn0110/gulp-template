# gulp 導入用 テンプレート（社内研修などにも)

## 概要

webサイトのコーディングでの使用を想定した、gulp導入テンプレート  
可能な限りミニマムな構成としています。  

<br>

## 使い方

### 1. 各種インストール

#### 1-1. Git for windows のダウンロード  

<img src="https://git-for-windows.github.io/img/git_logo.png" width="200" alt="git for windows">  

→ https://git-scm.com/downloads/  

#### 1-2. nodejsのインストール  

<img src="https://nodejs.org/static/images/logo.svg" width="200" alt="nodejs">  

→ https://nodejs.org/download/  

インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  

``` bash
// nodejsの確認
$ node -v
v4.4.5

// npmの確認
$ npm -v
v3.7.1
```

``` text
◆Nodist
windows の場合は`nodist`をインストールして、Nodejsのバージョン管理がおススメです。
→ 参考URL http://qiita.com/yokoh9/items/20d6bdc6030a3a861189  
```

#### 1-3. Gulpをグローバルにインストール  

`npm install -g gulp`をコマンドツールで入力  
インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  

``` bash
// Gulp本体をグローバルにインストール
$ npm install -g gulp

// インストール後に動作するかの確認
$ gulp -v
CLI version 3.9.0
```

### 2. Gulpの起動

#### 2-1. 今回使用する`gulp-template`をダウンロードして、作業フォルダに配置する。  

ダウンロードURL https://github.com/yama-dev/gulp-template/releases/latest  

#### 2-2. npmを使用してモジュールをインストール  


``` bash
// 作業ディレクトリに移動してから以下のコマンドを実行
// ※ `package.json` に記述されたモジュールがインストールされる。  
npm install
```

#### 2-3. Gulpを起動  

以下のコマンドツールで以下を入力  
※コマンド一覧は「Gulpのタスク一覧」を参考してください。  

``` bash
gulp
```

<br>

## Gulpのタスク一覧

| コマンド | 内容 | 補足 | 
| --- | --- | --- | 
| `gulp`          | 通常の起動                 | - サーバーの起動<br> - htmlファイルの構文チェック <br>- Sassファイルのコンパイル <br>- 各種ファイルの監視 <br>- ブラウザリンク、リロード | 
| `gulp sass`     | Sassファイルのコンパイル   |                                                                                                                                          | 
| `gulp htmllint` | HTMLファイルの構文チェック |                                                                                                                                          | 
| `gulp release`  | ファイルのリリース         | 公開ファイルのみを`/release/`ディレクトリにまとめる。                                                                                    | 
| `gulp php-twig` |                            |                                                                                                                                          | 

<br>

## 主な仕様

| パッケージ | 役割 | 補足 | 
| --- | --- | --- | 
| gulp          | Gulp本体                     |                                            | 
| gulp-sass     | Sass                         | ※SCSS記法<br>※gulp-sass + gulp-pleeease  | 
| gulp-htmlhint | HTMLのバリデーションチェック | htmlhint-stylishでコンソールの見た目を調整 | 
| browser-sync  | ブラウザのリロード           |                                            | 
| gulp-Notify   | デスクトップ通知             |                                            | 

#### ファイル構造
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

<br>

## インストール

#### ダウンロード https://github.com/yama-dev/gulp-template/releases/latest  

<br>

## Contribution

1. Fork it ( https://github.com/yama-dev/gulp-template/fork )
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

<br>

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

<br>

## Author

[yama-dev](https://github.com/yama-dev)
