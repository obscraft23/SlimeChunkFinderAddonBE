# Slime Chunk Finder Addon BE
<img src="https://img.shields.io/github/downloads/obscraft23/SlimeFinderAddonBE/total?style=for-the-badge"> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

English README is [here](https://github.com/obscraft23/SlimeFinderAddonBE).

マインクラフト統合版でスライムチャンクを検索・地図表示するアドオン（リソースパック）です。
<br>最新版(ver. 1.0.0)のダウンロードは[こちら](https://github.com/obscraft23/SlimeChunkFinderAddonBE/releases/tag/v1.0.0)。

## アドオン導入時の注意
+ ワールド作成時に __「Molang 機能」をON__ にしてください。

+ 現段階では、１人称視点の挙動が安定しないので、 __３人称視点での使用__ を推奨します。

+ 必ず有効なリソースパックのリストの一番上に置いてください。他のリソースパック（特にPlayer.entity.jsonの変更を含むもの）と併用した場合、正しく機能しない場合があります。

## 使い方
1. チャンクマップ
<br> プレーヤーの現在地をチャンクマップに表示します。

2. スライムチャンク
<br> スライムチャンクが緑色でハイライトされます。

3. 方角
<br> プレーヤーが向いている方向に合わせてマップも回転します。北は赤い三角マーカーで表示されます。

4. 情報パネル
<br> プレーヤーの現在地が沼地またはマングローブの沼地の場合、「biome」に「OK!」と表示されます。
<br> プレーヤーの現在地がスライムチャンクの場合「chunk」に「OK!」と表示されます。

<img src="./explain01.png" width=700>

## 注意点
* 座標の制限はありません。24ビット入力まで取り扱えるので、原理的には約1000万ブロック離れても（このアドオンは）正しく動作します。

* 負荷軽減のために約2秒に1回の頻度でスライムチャンクを計算しています。そのため、チャンクをまたいだ瞬間や高速で移動した場合に描画が不安定になることがあります。

* チャンクマップの端で描画が乱れる場合があります。

## 利用に際して
* 特に制限はありませんが、二次利用の際はクレジットを含めてください。
* 詳しくは[MITライセンス](https://github.com/obscraft23/SlimeChunkFinderAddonBE/blob/main/LICENSE.txt])に従ってください。

## スライムの湧き条件について
※1.19.60現在

* スライムチャンク
<br>スライムは「スライムチャンク」と呼ばれる特別なチャンクのY座標39以下に湧きます。このスライムチャンクを検索表示するのがこのアドオンです。<br>スライムチャンクでは明るさレベルに関係なくスライムが湧きます。

* 沼地/マングローブの沼地
<br> スライムは沼地またはマングローブの沼地のY座標50から70の間に湧きます。このアドオンではプレーヤーの現在地が沼地かどうか判定してくれます。
<br> 夜かつ明るさレベル7以下である必要があります。
<br> 湧き効率は月齢に比例します。満月時が最も効率がよく、新月時には湧きません。

## カスタムコマンド（旧バージョン）
* v1.0.0リリースで、スライムチャンクを検索するカスタムコマンド部分は、ビヘイビアパックに該当するため除外しましたが、引き続きgithubから直接利用可能です。
* 「BP」ディレクトリをダウンロードし、ビヘイビアパックとして使ってください。
* gametestを利用していますので、「ベータAPI」と「ホリデークリエイターの特徴」をONにしてください。
* 使用方法はチャット欄に「!isSlime」と打つだけです。

## 今後の開発予定
ゲーム体験を損ねない範囲でアップデートしたいと思っています。

* １人称視点の改善
* スライムチャンクをワールド上にハイライトする。
* 湧いたスライムの位置をマップに表示する。
* 沼地バイオームをマップ上に表示する。

## 参考
* Slime finder pe: https://github.com/depressed-pho/slime-finder-pe
<br>統合版スライムチャンクの生成ルールの発見者。
* Mersenne Twister in JavaScript: https://magicant.github.io/sjavascript/mt.html
<br>マインクラフト統合版で使われている疑似乱数。
* PixelMplus: https://itouhiro.hatenablog.com/entry/20130602/font
<br> 使用フォント

## 連絡先
[![Gmail adress](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](obscraft23@gmail.com)
[![Twitter URL](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/obscraft23)
![](https://dcbadge.vercel.app/api/shield/1065692459021107211?style=for-the-badge)
