class Juggernaut {
    constructor(game) {

        // sprite sheet
        this.spritesheet = ASSET_MANAGER.getAsset("./jugger.png");

        // starting coordinates
        this.x = 150;
        this.y = 150;

        // face right for 0 and 1 for face left. 3 for up and 4 for down.
        this.facing = 1;
        this.direction = 1;
        this.game = game;
        this.animations = [];

        // Juggernaut moves right
        this.animations.push(new Animator(this.spritesheet, 5, 135, 45, 52, 4, 0.1, 2, false, true));

        // Juggernaut moves left
        this.animations.push(new Animator(this.spritesheet, 6, 74, 45, 52, 4, 0.1, 2, true, true));

        // Juggernaut moves up
        this.animations.push(new Animator(this.spritesheet, 6, 198, 45, 52, 4, 0.1, 2, true, true));

        // Juggernaut moves down
        this.animations.push(new Animator(this.spritesheet, 2, 6, 45, 52, 4, 0.1, 2, true, true));

    };

    draw(ctx) {
        if (this.facing == 1) {
            this.animations[0].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        } else if (this.facing == 0) {
            this.animations[1].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        } else if (this.facing == 3) {
            this.animations[2].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        } else if (this.facing == 2) {
            this.animations[3].drawFrame(this.game.clockTick, ctx, this.x, this.y, 2);
        }
    };

    update() {
        if (this.game.left) {
            this.facing = 0;
            this.x -= 10;
        }

        if (this.game.right) {
            this.facing = 1;
            this.x += 10;
        }

        if (this.game.down) {
            this.direction = 0;
            this.facing = 2;
            this.y += 10;
        }

        if (this.game.up) {
            this.direction = 1;
            this.facing = 3;
            this.y -= 10;
        }
    };

};