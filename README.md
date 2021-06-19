# Ｗebサーバ無しHTML(JavaScript)でJSONデータを扱う

Webサーバーを立てずに、ローカルHTML(JavaScript)でJSONデータを扱うサンプル作りました。

## Base_01 : 基本

Webサーバーを立てずに、ローカルHTML(JavaScript)でJSONデータを扱うサンプル。説明はQiita記事参照 -> [Ｗebサーバ無しHTML(JavaScript)でJSONデータを扱う](https://qiita.com/suo-takefumi/items/be1cbc19f1d105c57bce)

ファイル構成

- Base_01
    - accessJson.html
    - link.json.js

`link.json.js`はJSONデータを含む変数のみ記載しています。拡張子を`.json`とすると読み込み時にCORSエラーが発生するため、このような形式にしています。（ネットで見つけた方法）

Webサーバー不要 `accessJson.html` を実行するだけで動作します。

## AWS-Diagram_01 : JSONデータからAWS構成図を作図

`01_base` を応用したスクリプト。JSONデータ `link.json.js` をもとにAWSの構成図を作図するスクリプト。

[![alt設定](http://img.youtube.com/vi/XDBchGyI0JE/0.jpg)](https://www.youtube.com/watch?v=XDBchGyI0JE)

使い方はこちらのQiita記事で紹介しました

- JSONデータからAWS構成図を作図するスクリプト
- https://qiita.com/suo-takefumi/items/2608dd179e83eb284779

ファイル構成

- AWS-Diagram_01
    - AwsDiagram.html
    - link.json.js
    - images
        - alarm.png
        - alb.png
        - ※以下略(画像データを格納)

## AWS-Diagram_02 : JSONデータからAWS構成図を作図

AWS-Diagram_01 の改良版。`ファイルを選択`ボタンで、読み込むJSONデータを指定します。

- AWS-Diagram_02
    - AwsDiagram_02.html

- AWS構成図のサンプル(JSONファイル)

