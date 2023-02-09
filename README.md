# SlimeFinderAddonBE
<img src="https://img.shields.io/github/downloads/obscraft23/SlimeFinderAddonBE/total?style=for-the-badge"> [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

日本語はこちら

This resource pack is a in-game slime chunk finder for Minecraft Bedrock eddition.

Latest release (ver. 1.0.0) is [here]().

## Installation
* You have to activate "Molang features" if you want to use all the utilities in the pack.
* The pack is unstable in the first-person view at this moment. Please use it in the third-person view.
* Using other resource packs together probably prevents the pack from working properly. You need to put the pack on top of the active resource pack list.

## How to use

## Features and Notice
* No coordinate limitation. The code accepts 24bit numbers and will properly work within ~10M blocks from the wold origin in principle.
* The code calculates slime chunks every ~2 seconds to reduce the workload. Therefore, The viewer might be unstable when you move over chunks and/or move very fast.
* The rendering is a bit unstable at the edge of the viewer.

### Custom Command
* The custom command to search slime chunks is decomissioned after v1.0.0 release, but still available in the "BP" directory.
* You need to activate "beta API" and "holiday creator feature".
* Usage in game: just type "!isSlime" in chat.

## Reference
* Slime finder pe: https://github.com/depressed-pho/slime-finder-pe
<br>They originally found the generation rule of slime chunks by reverse engineering.

* Mersenne Twister in JavaScript: https://magicant.github.io/sjavascript/mt.html
<br>Random number sequence generator used in Minecraft Bedrock.

* PixelMplus: https://itouhiro.hatenablog.com/entry/20130602/font
<br>a font used in the pack.

## Contact 連絡先
[![Gmail adress](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](obscraft23@gmail.com)
[![Twitter URL](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/obscraft23)
![](https://dcbadge.vercel.app/api/shield/1065692459021107211?style=for-the-badge)
