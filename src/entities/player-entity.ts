import { Sprite, Texture } from "pixi.js";

import { MovementCompnent } from "@/components/movement-component";
import { PositionComponent } from "@/components/position-component";

export class PlayerEntity {
    public position: PositionComponent
    public movement: MovementCompnent
    public sprite: Sprite

    public constructor(texture: Texture) {
        this.position = new PositionComponent(100, 200),
        this.movement = new MovementCompnent(5, 'up'),
        this.sprite = new Sprite(texture)
    }
}