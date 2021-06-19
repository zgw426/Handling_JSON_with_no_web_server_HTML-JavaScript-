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
`./AWS-Diagram_02/AwsDiagram_02.html`をブラウザで開くとアプリが起動する。

- AWS構成図のサンプル(JSONファイル)

|JSONファイル|概要|
|---|---|
|code-001_重ねた場合.json|レイヤーによりサイズが違う7つの図形を1箇所に重ねて表示|
|code-002_バラバラ配置.json|code-001の図形をバラバラに配置|
|code-003_基本-長方形.json|縦長、横長の長方形|
|code-004_基本-接続線.json|図形をつなぎ接続線|
|code-011_EC2.json|AWS構成図 VPC内のEC2|
|code-012_EC2+EIP+IGW.json|code-011にEIP,InternetGateway追加|
|code-013_EC2+通信経路.json|code-012に通信経路を追加|
|code-020_Webサーバー.json|ALB-EC2(Webサーバー)-DB(RDS)のAWS構成図|
|code-021_Webサーバー_通信経路.json|code-020に通信経路などの接続線を追加|
|code-022_Webサーバー_autoscalling.json|code-021にAutoScallingを追加|
|code-023_Webサーバー_CloudFront.json|code-022にCloudFrontや開発環境などを追加|
|code-030_LINEBot.json|LINE BotのAWS構成図|
|code-031_LINEBot.json|code-031にS3を追加|
|code-040_VPCPeering.json|VPCピア接続のAWS構成図|
|code-041_ルートテーブル追加.json|code-040にルートテーブルを追加|
|code-042_通信経路修正.json|code-041のVPC間の通信経路を修正|


