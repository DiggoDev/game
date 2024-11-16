import { Sprite, Texture } from "pixi.js";

export class CharacterAssets {
    public sprite: Sprite
    constructor(texture: Texture) {
        this.sprite = new Sprite(texture)
    }
}