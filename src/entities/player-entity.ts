import { Sprite, Texture } from 'pixi.js';

import { MovementComponent } from '@/components/movement-component';
import { PositionComponent } from '@/components/position-component';
import { Direction } from '@/utils/enums/direction';

export class PlayerEntity {
	public position: PositionComponent;
	public movement: MovementComponent;
	public sprite: Sprite;

	public constructor(texture: Texture) {
		this.movement = new MovementComponent(2, 1.5, 0, Direction.Down);	
		this.sprite = new Sprite(texture);
		this.position = new PositionComponent(this.sprite);

		this.position.setX(100)
		this.position.setY(200)
	}
}
