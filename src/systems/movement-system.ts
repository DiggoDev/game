import { PlayerEntity } from '@/entities/player-entity';

export class MovementSystem {
	static update(entity: PlayerEntity) {
		const position = entity.position;
		const movement = entity.movement;

		if (movement.direction === 'up') {
			position.y -= movement.speed;
		} else if (movement.direction === 'down') {
			position.y += movement.speed;
		}
	}
}
