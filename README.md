# SlimeFinderAddonBE
<img src="https://img.shields.io/github/downloads/obscraft23/SlimeFinderAddonBE/total?style=plastic"> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=plastic)](https://opensource.org/licenses/MIT)

Tools for findeing slime chunks in Minecraft Bedrock.
<br>マインクラフト統合版でスライムチャンクを探すためのアドオンです。

Latest release (ver. 0.1.0) is [here](https://github.com/obscraft23/SlimeFinderAddonBE/releases/tag/v0.1.0).
<br>最新版(ver. 0.1.0)のダウンロードは[こちら](https://github.com/obscraft23/SlimeFinderAddonBE/releases/tag/v0.1.0)

## Features 特徴
* No coordinate limitation since the code check if the position is a slime chunk without using pre-inputed data (e.g., look-up table).
<br> Slime chunks generation is independent of the world seed (exclusive to Bedrock) and can be performed by using Mersenne Twister.

* 座標の範囲に制限はありません（事前に既知スライムチャンクのデータを与えるのではなく、その場で計算を行うからです）。
<br>統合版のスライムチャンクの場所はシード値とは無関係にMersenne Twisterによって生成された疑似乱数によって決定されます。

## How to use 使い方
You need to activate "beta API" and "holiday creator feature".
<br>インポートしたら、ワールドで使用する際には「ベータAPI」と「ホリデークリエイターの特徴」をONにしてください。

### Custom Command カスタムコマンド

* Just type "!isSlime" in chat.<br>チャット欄で「!isSlime」と打つだけです。
* Check if you are in slime chunks.<br>現在地がスライムチャンクか教えてくれます。
* Tell you a nearby slime chunk if you are not in slime chunks. <br>現在地がスライムチャンクでなければ、近くのスライムチャンクの座標を教えてくれます。

![](docs/yesslime.png)

### Slime Chunk Viewer
Under development<br>現在開発中です。

* Visualize slime chunks around the player via grid textures.<br>(例)プレーヤー周囲のスライムチャンクをグリッド表示する。
* Allways check if you are in slime chunks and tell you via sidebar<br>(例)現在地がスライムチャンクかどうかサイドバーに常に表示する。

## Reference
* Slime finder pe: https://github.com/depressed-pho/slime-finder-pe
<br>They originally found the generation rule of slime chunks by reverse engineering.
<br>スライムチャンクの生成ルールの発見者。

* Mersenne Twister in JavaScript: https://magicant.github.io/sjavascript/mt.html
<br>Random number sequence generator used in Minecraft Bedrock.
<br>マインクラフト統合版で使われている疑似乱数。

## Contact 連絡先
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/bukotsunikki.svg?style=social&label=Follow%20%40obscraft23)](https://twitter.com/obscraft23)

![](https://dcbadge.vercel.app/api/shield/1065692459021107211?style=plastic)
