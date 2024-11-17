import { Scene } from "./scene";

import playerImage from '../assets/graphics/basic-player.png';
import { Assets } from "pixi.js";
import { PlayerEntity } from "@/entities/player-entity";
import { MovementSystem } from "@/systems/movement-system";

export class GameScene extends Scene {
    private player?: PlayerEntity
    public async init() {
        const texture = await Assets.load(playerImage);
        this.player = new PlayerEntity(texture)

        this.addChild(this.player.sprite)
    }

    public async update() {
        if (!this.player) throw new Error('Run init function before update')

        MovementSystem.update(this.player);
    }
}