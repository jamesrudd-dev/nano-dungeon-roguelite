import "phaser";

const config = {
  title: "Nano Dungeon",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D"
};

export class NanoDungeon extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

window.onload = () => {
  var game = new NanoDungeon(config);
};