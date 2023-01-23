// uitls.js
// Copyright © 2023 by @obscraft23.

import MersenneTwister from "./mt.js"

/**
 * Lower 16-bits of multiplication of two uint32 values a * b
 * 
 * @param {number} a,b - uint32 values are expected.
 * @returns {number}
 */

function mul32_lo(a,b) {
    let a00 = a & 0xffff;
    let a16 = a >>> 16;
    let b00 = b & 0xffff;
    let b16 = b >>> 16;

    let c00 = a00 * b00;
    let c16 = c00 >>> 16;

    c16 += a16 * b00;
    c16 &= 0xffff;
    c16 += a00 * b16;

    let lo = c00 & 0xffff;
    let hi = c16 & 0xffff;

    return ((hi << 16) | lo) >>> 0;
};

function testMT(seed) {
    let mt = MersenneTwister(seed);
    let n  = mt.nextInt();
    return n;
};

/**
 * Check if a position is in a slime chunk.
 * 
 * @param {number} coordX - X coordinate in blocks.
 * @param {number} coordZ - Z coordinate in blocks.
 * @returns {boolean} return true if the input position is in a slime chunk.
 */

function isSlimeChunkPos(coordX,coordZ) {
    
    let chunkX    = Math.floor(coordX / 16) >>> 0;
    let chunkZ    = Math.floor(coordZ / 16) >>> 0;
    let seed      = mul32_lo(chunkX, 0x1f1f1f1f) ^ chunkZ;
    let mt        = new MersenneTwister(seed);
    let n         = mt.nextInt();
    let isSlimechunk = (n % 10 == 0);
    
    return isSlimechunk;
};

/**
 * Search nearby slime chunks around the input position.
 * 
 * @param {number} coordX - X coordinate in blocks.
 * @param {number} coordZ - Z coordinate in blocks.
 * @returns {array} return the NW corner of a nearby slime chunk as [X, Z] in in blocks.
 */


function searchNearestSlimeChunkPos(coordX,coordZ) {

    const chunkX    = Math.floor(coordX / 16);
    const chunkZ    = Math.floor(coordZ / 16);
    
    let slimechunkX = 0;
    let slimechunkZ = 0;
    let searchradius = 0;
    let alreadyfound = false;

    if (isSlimeChunkPos(coordX,coordZ)){
        slimechunkX = chunkX;
        slimechunkZ = chunkZ;
        alreadyfound = true;
    }

    while (!alreadyfound) {

        searchradius += 1;

        let ix = chunkX - searchradius;
        let iz = chunkZ - searchradius;

        if (!alreadyfound) {
            for (ix = chunkX - searchradius; ix <= chunkX + searchradius; ix++) {
                if (isSlimeChunkPos(ix*16,iz*16)) {
                    slimechunkX = ix;
                    slimechunkZ = iz;
                    alreadyfound = true;
                    break;
                }
            }
        }

        if (!alreadyfound) {
            iz = chunkZ + searchradius
            for (ix = chunkX - searchradius; ix <= chunkX + searchradius; ix++) {
                if (isSlimeChunkPos(ix*16,iz*16)) {
                    slimechunkX = ix;
                    slimechunkZ = iz;
                    alreadyfound = true;
                    break;
                }
            }
        }

        if (!alreadyfound) {
            ix = chunkX - searchradius
            for (iz = chunkZ - searchradius + 1; iz < chunkZ + searchradius; iz++) {
                if (isSlimeChunkPos(ix*16,iz*16)) {
                    slimechunkX = ix;
                    slimechunkZ = iz;
                    alreadyfound = true;
                    break;
                }
            }
        }

        if (!alreadyfound) {
            ix = chunkX + searchradius
            for (iz = chunkZ - searchradius + 1; iz < chunkZ + searchradius; iz++) {
                if (isSlimeChunkPos(ix*16,iz*16)) {
                    slimechunkX = ix;
                    slimechunkZ = iz;
                    alreadyfound = true;
                    break;
                }
            }
        }
    }

    let slimechunkcoord = [16*slimechunkX,16*slimechunkZ]
    return slimechunkcoord

}

// export
export {isSlimeChunkPos,searchNearestSlimeChunkPos}