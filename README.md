# __gulp-template__
gulp 導入用 テンプレート（社内研修にも)

---

### __使い方__
1.  各種インストール
2.  Gulpの起動

---

### __1.各種インストール__
__1-1. Git for windows のダウンロード__  
- ダウンロードURL https://git-scm.com/downloads/  

<br>

__1-2. nodejsのインストール__  
- ダウンロードURL https://nodejs.org/download/  
※windows の場合は`nodist`をインストールして、Nodejsのバージョン管理をおススメ  
  
- 参考URL http://qiita.com/yokoh9/items/20d6bdc6030a3a861189  
  
インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  
``` javascript
// nodejsの確認
$ node -v
v4.4.5

// npmの確認
$ npm -v
v3.7.1
```

<br>

__1-3. Gulpをグローバルにインストール__  
`npm install -g gulp`をコマンドツールで入力  
  
インストールが完了したら、以下のコマンドで、正しく動作していることを確認する。  
``` javascript
// Gulp本体をグローバルにインストール
$ npm install -g gulp

// インストール後に動作するかの確認
$ gulp -v
CLI version 3.9.0
```

---

### __2.Gulpの起動__
__2-1. 今回使用する`gulp-template`をダウンロードして、作業フォルダに配置する。__
ダウンロードURL https://github.com/yama-dev/gulp-template/releases/latest  

<br>

__2-2. npmを使用してモジュールをインストール__
※以下のコマンドで、`package.json`に記述されたモジュールがインストールされる。
``` javascript
// 作業ディレクトリに移動してから
npm install
```

<br>

__2-3. Gulpを起動__
以下のコマンドツールで以下を入力
``` javascript
gulp
```

---

### __Gulpのタスク__
__通常の起動__  
```javascript
gulp
```
- サーバーの起動
- htmlファイルの構文チェック
- Sassファイルのコンパイル
- 各種ファイルの監視
- ブラウザリンク、リロード

<br>

__Sassファイルのコンパイル__  
```javascript
gulp sass
```

<br>

__HTMLファイルの構文チェック__  
```javascript
gulp htmllint
```

<br>

__ファイルのリリース__  
```javascript
gulp release
```
- 公開ファイルのみを`/release/`ディレクトリにまとめる。

<br>

---

### __主な仕様__
 * Gulp
   * Sass(SCSS記法)
   * HTML Hint
   * Gulp-Notify
   * Browser-Sync

---

### __ファイル構造__
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

