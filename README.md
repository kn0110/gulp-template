# gulp-template
gulp 導入用 テンプレート（社内研修にも)

##使い方(Using)
###Node Modules インストール
```javascript
npm install
```
  
###Gulp デフォルトタスク
```javascript
gulp
```
  
##主な仕様
 * Gulp
   * Sass(SCSS記法)
   * HTML Hint
   * Gulp-Notify
   * Browser-Sync

  
##ファイル構造
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
