# Ｗebサーバ無しHTML(JavaScript)でJSONデータを扱う

Webサーバーを立てずに、ローカルHTML(JavaScript)でJSONデータを扱うサンプル作りました。

## 01_base : 基本

Webサーバーを立てずに、ローカルHTML(JavaScript)でJSONデータを扱うサンプル。説明はQiita記事参照 -> [Ｗebサーバ無しHTML(JavaScript)でJSONデータを扱う](https://qiita.com/suo-takefumi/items/be1cbc19f1d105c57bce)

ファイル構成

- 01_base
    - accessJson.html
    - link.json.js

`link.json.js`はJSONデータを含む変数のみ記載しています。拡張子を`.json`とすると読み込み時にCORSエラーが発生するため、このような形式にしています。（ネットで見つけた方法）

Webサーバー不要 `accessJson.html` を実行するだけで動作します。

## 02_AWS-Diagram : JSONデータからAWS構成図を作図

`01_base` を応用したスクリプト。JSONデータ `link.json.js` をもとにAWSの構成図を作図するスクリプト。

[![alt設定](http://img.youtube.com/vi/XDBchGyI0JE/0.jpg)](https://www.youtube.com/watch?v=XDBchGyI0JE)

ファイル構成

- 02_AWS-Diagram
    - AwsDiagram.html
    - link.json.js
    - images
        - alarm.png
        - alb.png
        - autoscalling.png
        - aws.png
        - az.png
        - cw.png
        - ec2.png
        - img01.jpg
        - imgs.pptx
        - office.png
        - onpremises.png
        - pc.png
        - rds.png
        - s3.png
        - sg.png
        - sns.png
        - subnet-private.png
        - subnet-public.png
        - users.png
        - vpc.png




