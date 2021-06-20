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

[![AWS Diagram from JSON Data](https://img.youtube.com/vi/SAZjgWXGkG4/0.jpg)](https://www.youtube.com/watch?v=SAZjgWXGkG4)


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



### AWS-Diagram_02 : JSONデータの作成規則 : 4つのTYPE

JSONデータには、ＴYPE属性には `INIT`,`FIG`,`LINE`,`LINE-GRP` の4つ値のいずれかを設定します。

```
[
    {"TYPE": "INIT", ・・・},
    {"TYPE": "FIG", ・・・},
    {"TYPE": "LINE", ・・・},
    {"TYPE": "LINE-GRP", ・・・}
]
```

|パラメータ|||
|---|---|---|
|INIT|必須|図全体の定義|
|FIG|必須|図の配置場所などの設定|
|LINE|オプション|接続の設定|
|LINE-GRP|オプション|接続(LINE)設定のグループ化|

以降、TYPE別の設定方法を紹介します
### AWS-Diagram_02 : JSONデータの作成規則 : TYPE:INITの設定方法

```
[
  { "OBJECT": "NONE",
      "TYPE": "INIT",
      "MaxLayer": 6,
      "BaseWidth": 2,
      "CellWidth": 20,
      "FRM-A" : ["smpA.png", "none" ,"0.0","#00BBCC","HEAD-LEFT"],
      "FRM-B" : ["smpB.png", "none" ,"0.0","#BB00AA","HEAD-RIGHT"],
      "FRM-C" : ["smpC.png", "none" ,"0.0","#CCBB00","TAIL-LEFT"],
      "FRM-D" : ["smpD.png", "none" ,"0.0","#A0A0A0","TAIL-RIGHT"],
      "FRM-E" : ["smpE.png", "#AABB00" ,"0.2","#0B0C0D","HEAD-LEFT"],
      "FRM-F" : ["smpF.png", "none" ,"0.0","#000000","HEAD-LEFT"],
      "FRM-G" : ["smpG.png", "none" ,"0.0","none","CENTER"]
  }
]
```

|パラメータ||値(例)||
|---|---|---|---|
|OBJECT|必須|NONE||
|TYPE|必須|INIT||
|MaxLayer|必須|6||
|BaseWidth|必須|2||
|CellWidth|必須|20||
|{{図形セット名}}|必須|FRM-A|図形セットの名称を設定。JSONファイル内で一意の値にする。|

図形セットの定義について、図形セットの定義は、1つの画像と四角形で構成されており、画像と四角形との位置関係や大きさを定義します。

|#|値(例)||
|---|---|---|
|1|smpA.png|画像ファイル|
|2|#121212|四角形の面の色。`none`は色なし|
|3|0.0|四角形の面の色の透明度。`0.0`は完全な透明。`0.3`は透明度30%|
|4|#121212|四角形の枠線の色。`none`は色なし|
|5|HEAD-LEFT|画像ファイルの四角形の配置位置。`CENTER`,`HEAD-LEFT`,`HEAD-RIGHT`,`TAIL-LEFT`,`TAIL-RIGHT`|


### AWS-Diagram_02 : JSONデータの作成規則 : TYPE:FIGの設定方法

`TYPE:FIG`では、図形の大きさや位置などを設定します。

|パラメータ||設定例||
|---|---|---|---|
|OBJECT|必須|OBJ-600|図形のID。接続線を設定する際に使用|
|LAVEL|必須|レイヤー６|図形と共に表示する文字列|
|TYPE|必須|FIG|-|
|SET|必須|FRM-A|使用する図形セットの定義名|
|LAYER|必須|6|描画する階層。数値が大きいほどサイズが大きくなる。1～`MaxLayer`までの値を設定|
|TopX|必須|1|描画する図形の開始位置(X軸)|
|TopY|必須|1|描画する図形の開始位置(Y軸)|
|BtmX|必須|1|描画する図形の終了位置(X軸)|
|BtmY|必須|1|描画する図形の終了位置(Y軸)|
|Width |必須|0|プログラムで使用するパラメータ。`0`を設定|
|Height|必須|0|プログラムで使用するパラメータ。`0`を設定|

### AWS-Diagram_02 : JSONデータの作成規則 : TYPE:LINEの設定方法

|パラメータ||設定例||
|---|---|---|---|
|TYPE|必須|LINE|-|
|OBJECT|必須|connect-011|LINE名。LINE-GRPでグループ化するために設定。JSONファイル内で一意の値にする。|
|LINE|必須|[OBJ-600,OBJ-200]|線をつなぐ図形のIDを設定。`[{{図形ID}},{{図形ID}},{{図形ID}}]`のように記載する|


### AWS-Diagram_02 : JSONデータの作成規則 : TYPE:LINE-GRPの設定方法

|パラメータ||設定例||
|---|---|---|---|
|TYPE|必須|LINE-GRP|-|
|LAVEL|必須|接続②|接続線グループ名称。構成図を生成した際に表示。|
|STROKE|必須|#bafab0|線の色|
|LINES|必須|[connect-011,connect-012]|グループに属するLINE名を設定。`[{{LINE名}},{{LINE名}},{{LINE名}}]`|




