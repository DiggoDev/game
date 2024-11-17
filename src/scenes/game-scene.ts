import { Scene } from './scene';

import playerImage from '../assets/graphics/basic-player.png';
import { Assets } from 'pixi.js';
import { PlayerEntity } from '@/entities/player-entity';
import { MovementSystem } from '@/systems/movement-system';
import { InputManager } from '@/core/input-manager';
import { Direction } from '@/utils/enums/direction';

export class GameScene extends Scene {
	private player?: PlayerEntity;
	private inputManager: InputManager

	public constructor() {
		super();
		this.inputManager = new InputManager()
	}

	public async init() {

		const texture = await Assets.load(playerImage);
		this.player = new PlayerEntity(texture);

		this.addChild(this.player.sprite);
	}

	public async update(delta: number) {
		if (!this.player) throw new Error('Run init function before update');
		this.handleInput(this.player, delta)
		MovementSystem.update(this.player);
	}

	private handleInput(player: PlayerEntity, delta: number) {
		let noMove = false
		if (this.inputManager.isKeyDown('a')) {
			player.movement.direction = Direction.Left
		} else if (this.inputManager.isKeyDown('d')) {
			player.movement.direction = Direction.Right
		}
		else if (this.inputManager.isKeyDown('w')) {
			player.movement.direction = Direction.Up
		}
		else if (this.inputManager.isKeyDown('s')) {
			player.movement.direction = Direction.Down
		} else {
			player.movement.speed = 0
			noMove = true
		}

		if (!noMove) {
			player.movement.speed = player.movement.velocity * delta
		}


		if (player.movement.speed < 0) player.movement.speed = 0
		if (player.movement.speed > player.movement.maxSpeed) player.movement.speed = player.movement.maxSpeed
	}
}
