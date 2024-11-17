import { Direction } from "@/utils/enums/direction";

export class MovementComponent {
	constructor(
		public maxSpeed: number,
		public velocity: number,
		public speed: number,
		public direction: Direction,
	) {}
}
