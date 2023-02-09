// main.js
// Copyright © 2023 by @obscraft23.

import { world } from "@minecraft/server"
import { isSlimeChunkPos, searchNearestSlimeChunkPos } from "./utils.js"

/**
 * Type: custom command
 * Description: check if your current position is in slime chunk and tell you a nearby slime chunk.
 * Usage: Type "!isSlime" in chat.
*/

world.events.beforeChat.subscribe(ev => {
    if (ev.message.startsWith("!isSlime")) {
        ev.cancel = false;
        const senderLocation = ev.sender.location;
        const coordX = Math.floor(senderLocation.x);
        const coordY = Math.floor(senderLocation.y);
        const coordZ = Math.floor(senderLocation.z);

        if (isSlimeChunkPos(coordX,coordZ)) {
            if (coordY <= 39) {
                ev.message = "You are in a slime chunk and on the slime spownable layer.";
            }
            else
            {
                ev.message = "You are in a slime chunk but NOT on the slime spownable layer. Y sould be 39 or less.";
            }
        }
        else {
            let sc = searchNearestSlimeChunkPos(coordX,coordZ)
            let msg = "The NW corner of a nearby slime chunk is ("+String(sc[0])+",Y,"+String(sc[1])+"), and Y should be 39 or less."
            ev.message = "You are NOT in a slime chunk. "+msg;
        }
    } 
});