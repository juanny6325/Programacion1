class GameOver extends Phaser.Scene {
    constructor() {
      super('GameOver');
     }

create() { 
    this.add.image(1200,400,"fondo")
    scoreText = this.add.text(800, 280, "PERDISTE", {fontSize: "128px", fill: "#000"});
    
    menuprinc =this.add.image(2000, 700, "menuprincipal").setScale(1.50)
    var sonido = this.sound.add('click');
    //var sonido1 = this.sound.add("lava1")
    //var sonido2 = this.sound.add("viento")

     menuprinc.setInteractive()
     
     
     menuprinc.on('pointerdown', () => this.scene.start('Menu') );
    
}
}