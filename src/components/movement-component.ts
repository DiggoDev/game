import { Direction } from "@/utils/enums/direction";

export class MovementCompnent {
	constructor(
		public speed: number,
		public direction: Direction,
	) {}
}
