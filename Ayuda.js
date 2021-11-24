class Ayuda extends Phaser.Scene {
    constructor() {
      super('Ayuda');
     }

create() { 
    this.add.image(1200,400,"fondo")
    scoreText = this.add.text(250, 280, "Debes esquivar estas puas para no morir", {fontSize: "64px", fill: "#FFFFFF"});
    this.add.image(1800,280,"puas").setScale(2.50)
    scoreText = this.add.text(250, 380, "Presiona la tecla A para dispararle a los hongos", {fontSize: "64px", fill: "#FFFFFF"});
    var sonido = this.sound.add('click');
    
    menuprinc =this.add.image(2000, 700, "menuprincipal").setScale(1.50)
     menuprinc.setInteractive()
     //menuprinc.on('pointerdown', () => this.scene.start('Menu') );
     menuprinc.on('pointerdown', () => sonido.play() );
     menuprinc.on('pointerdown', () => this.scene.start('Menu') );
    
}
}




