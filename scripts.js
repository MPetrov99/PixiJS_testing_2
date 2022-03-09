const Application = PIXI.Application;


const app = new Application({
    width: 500,
    height: 500,
    transparent: false,
    antialias: true
});

app.renderer.backgroundColor = 0xf0d8c9;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = 'absolute';

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const particleContainer = new PIXI.ParticleContainer(1000, {
    position: true,
    rotation: true,
    vertices: true,
    tint: true,
    uvs: true
});

const loader = PIXI.Loader.shared;

loader.add('tileset', './images/tileset1.png')
    .load(setup);

function setup(loader, resources) {
    const texture1 = resources.tileset.texture;
    const rect1 = new PIXI.Rectangle(14, 18, 95, 100);
    texture1.frame = rect1;
    const spr1 = new PIXI.Sprite(texture1);
    spr1.scale.set(2, 2);
    app.stage.addChild(spr1);

    const texture2 = new PIXI.Texture(resources.tileset.texture);
    const rect2 = new PIXI.Rectangle(17, 120, 85, 100);
    texture2.frame = rect2;
    const spr2 = new PIXI.Sprite(texture2);
    spr2.scale.set(2, 2);
    spr2.position.set(200, 200);
    app.stage.addChild(spr2);
};