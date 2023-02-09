# SlimeFinderAddonBE
<img src="https://img.shields.io/github/downloads/obscraft23/SlimeFinderAddonBE/total?style=plastic"> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=plastic)](https://opensource.org/licenses/MIT)
<br>マインクラフト統合版でスライムチャンクを検索・地図表示するアドオン（リソースパック）です。
<br>最新版(ver. 0.1.0)のダウンロードは[こちら](https://github.com/obscraft23/SlimeFinderAddonBE/releases/tag/v0.1.0)

## アドオン導入時の注意
+ すべての機能を利用する場合は、ワールド作成時に __「Molang 機能」をON__ にしてください。

+ １人称視点では挙動が安定しないので、 __３人称視点での使用__ を推奨します。

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

## 注意点
* 座標の制限はありません。24ビット入力まで取り扱えるので、原理的には約1000万ブロック離れても（このアドオンは）正しく動作します。

* 負荷軽減のために約2秒に1回の頻度でスライムチャンクを計算しています。そのため、チャンクをまたいだ瞬間や高速で移動した場合に描画が不安定になることがあります。

* チャンクマップの端で描画が乱れる場合があります。

## 利用に際して
* 特に制限はありませんが、二次利用の際はクレジットを含めてください。詳しくはMITライセンスに従ってください。

## その他
* v1.0.0リリースで、スライムチャンクを検索するカスタムコマンド部分は、ビヘイビアパックに該当するため除外しましたが、引き続きgithubから直接利用可能です。
* 使用方法はチャット欄に「!isSlime」と打つだけです。

## Reference
* Slime finder pe: https://github.com/depressed-pho/slime-finder-pe
<br>統合版スライムチャンクの生成ルールの発見者。
* Mersenne Twister in JavaScript: https://magicant.github.io/sjavascript/mt.html
<br>マインクラフト統合版で使われている疑似乱数。
* PixelMplus: https://itouhiro.hatenablog.com/entry/20130602/font
<br> 使用フォント

## Contact 連絡先
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow%20%40obscraft23)](https://twitter.com/obscraft23)

![](https://dcbadge.vercel.app/api/shield/1065692459021107211?style=plastic)
