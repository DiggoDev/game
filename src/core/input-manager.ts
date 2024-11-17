type KeyDownState = {
    [key: string]: boolean;
};

export class InputManager {
    private keyDownState: KeyDownState = {}
    
    public constructor() {
        // window.addEventListener('keydown', (ev) => {
        //     ev.key
        // })
        window.addEventListener("keydown", this.handleKeyDown.bind(this));
        window.addEventListener("keyup", this.handleKeyUp.bind(this));
    }

    public isKeyDown(key: string): boolean {
        return this.keyDownState[key] == true;
    }

    private handleKeyDown(event: KeyboardEvent) {
        if (!this.keyDownState[event.key]) {
            this.keyDownState[event.key] = true;
        }
    }
    private handleKeyUp(event: KeyboardEvent) {
        if (this.keyDownState[event.key]) {
            this.keyDownState[event.key] = false;
        }
    }
}