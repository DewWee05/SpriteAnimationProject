class Juggernaut {
    constructor(game, x, y, spritesheet) {
        Object.assign(this, {game, x, y, spritesheet});
        this.spritesheet = ASSET_MANAGER.getAsset("./sprite/juggernaut_sprite.png");

        this.size = 0;
        this.facing = 0;
        this.state = 0;

        this.velocity = 0;

        this.animation = new Animator(this.spritesheet, 12, 269, 16, 32, 4, 0.5, 14, false, true);
    };

    loadAnimations(spritesheet);

    update() {

    };

    draw(ctx) {

        this.animation.drawFrame(this.game.clockTick, ctx, 0, 0, 3);
    }
}