class Nivel2 extends Phaser.Scene {
    constructor() {
      super('Nivel2');
    }
    
    create() { 
        this.add.image(3600, 400, "fondo")
        this.add.image(1200,400,"fondo")
     // this.add.image(2400, 400, "fondo")
      
      
    platforms = this.physics.add.staticGroup();
         cube = this.physics.add.staticGroup();
         tower = this.physics.add.staticGroup();
         puas = this.physics.add.staticGroup();
         Gema = this.physics.add.staticGroup();
         enemigos=this.physics.add.staticGroup();
         sig=this.physics.add.staticGroup();
         llave=this.physics.add.staticGroup();
         skull=this.physics.add.staticGroup();
         hongos=this.physics.add.staticGroup();
         lava= this.physics.add.staticGroup();
         invisible=this.physics.add.staticGroup();
         sig.create(4200,650,"portal").setScale(0.90)
         var sonido = this.sound.add('click');
         var sonido1 = this.sound.add("lava1")
         var sonido2 = this.sound.add("viento")
         tower.create(2420, 400, "torrep");
         lava.create(400,800,"lava")
        lava.create(600,800,"lava")
        lava.create(800,800,"lava")
        lava.create(1000,800,"lava")
        lava.create(1200,800,"lava")
        lava.create(1400,800,"lava")
        lava.create(1600,800,"lava")
        lava.create(1800,800,"lava")
        lava.create(2000,800,"lava")
        lava.create(2200,800,"lava")
        lava.create(2400,800,"lava")
        lava.create(2600,800,"lava")
        lava.create(2800,800,"lava")
        lava.create(3000,800,"lava")
        lava.create(3200,800,"lava")
        lava.create(3400,800,"lava")
        lava.create(3600,800,"lava")
        lava.create(3800,800,"lava")
        lava.create(4000,800,"lava")
        lava.create(4200,800,"lava")
        lava.create(4400,800,"lava")
        lava.create(4600,800,"lava")
        platforms.create(400, 750, 'piso');
        invisible.create(720,400,"invisible")
        invisible.create(480,400,"invisible")
        platforms.create(600, 750, 'piso');
        platforms.create(600, 425, 'piso');
        platforms.create(200, 750, 'piso');
        cube.create(1000, 600, "cubo");
        platforms.create(1000, 250, 'piso');
        cube.create(800, 650, "cubo");
        cube.create(850, 475, "cubo");
        cube.create(860, 325, "cubo");
        platforms.create(1400, 335, 'piso');
        platforms.create(2700, 320, 'piso');
        tower.create(1150, 600, "torre");
        tower.create(1150, 550, "torre");
        platforms.create(1270, 500, 'piso');
        tower.create(1500, 250, "torre");
        tower.create(1500, 325, "torre");
        platforms.create(1270, 750, 'piso');
        platforms.create(1370, 750, 'piso');
        platforms.create(1570, 750, 'piso');
        cube.create(1700, 650, "cubo");
        cube.create(1540, 555, "cubo");
        cube.create(1530, 435, "cubo");
        cube.create(1520, 335, "cubo");
        tower.create(1875, 750, "torre");
        tower.create(1875, 520, "torre");
        platforms.create(1995, 635, 'piso');
        platforms.create(2250, 635, 'piso');
        platforms.create(2505, 635, 'piso');
        tower.create(2600, 750, "torre");
        tower.create(2600, 550, "torre");
        tower.create(2800, 750, "torre");
        tower.create(2800, 550, "torre");
        cube.create(2560, 535, 'cubo');
        cube.create(2570, 425, 'cubo');
        platforms.create(2900, 320, 'piso');
        platforms.create(3100, 320, 'piso');
        platforms.create(3300, 320, 'piso');
        platforms.create(3500, 320, 'piso');
        tower.create(3800, 150, "torre");
        tower.create(3800, 200, "torre");
        tower.create(3800, 270, "torre");
        platforms.create(3125, 520, 'piso');
        platforms.create(3325, 520, 'piso');
        platforms.create(3525, 520, 'piso');
        platforms.create(3720, 520, 'piso');
        platforms.create(2900, 750, 'piso');
        platforms.create(3100, 750, 'piso');
        platforms.create(3300, 750, 'piso');
        platforms.create(3500, 750, 'piso');
        platforms.create(3900, 750, 'piso');
        platforms.create(4100, 750, 'piso');
        platforms.create(4300, 750, 'piso');
        enemigos.create(430,712,"hongo")
        invisible.create(390,712,"invisible")
        invisible.create(700,712,"invisible")
        enemigos.create(520,390,"hongo")
        //invisible.create(520,390,"invisible")
        enemigos.create(1000,220,"hongo")
        invisible.create(880,220,"invisible")
        invisible.create(1120,220,"invisible")
        enemigos.create(1500,712,"hongo")
        invisible.create(1380,712,"invisible")
        invisible.create(1680,712,"invisible")
        enemigos.create(1250,470,"hongo")
        invisible.create(1170,470,"invisible")
        invisible.create(1380,470,"invisible")
        invisible.create(480,400,"invisible")
        enemigos.create(2000,600,"hongo")
        invisible.create(1900,600,"invisible")
        invisible.create(2100,600,"invisible")
        invisible.create(480,400,"invisible")
        //enemigos.create(2200,600,"enemigos")
        //invisible.create(480,400,"invisible")
        //enemigos.create(2170,600,"enemigos")
        //invisible.create(480,400,"invisible")
        enemigos.create(2240,600,"hongo")
        invisible.create(2140,600,"invisible")
        invisible.create(2340,600,"invisible")
        //enemigos.create(2500,600,"enemigos")
        invisible.create(480,400,"invisible")
        enemigos.create(3200,490,"hongo")
        invisible.create(3000,490,"invisible")
        invisible.create(3600,490,"invisible")
        Gema.create(470,725,"gema")
        llave.create(1400,300,"LLave")
        skull.create(2800,290,"muerte")
        
        //sonido1.play( {volume: 1});
       // sonido2.play({volume: 1.5})
        
 
        player = this.physics.add.sprite(270,710,"jugador")
        player.herido=false 
        player.tiempoDisparo=0
        player.recuperar=0
        life=3
         
         
    
        Disparo = this.physics.add.group()
         
        btnDisparo=this.input.keyboard.addKey("A")
         
 
 
         
        player.setCollideWorldBounds(false);
         
 
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('jugador', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
 
        this.anims.create({
            key: 'turn',
            frames: [ { key: 'jugador', frame: 4 } ],
            frameRate: 20
        });
 
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('jugador', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        KeyP = this.input.keyboard.addKey('P')
        cursors = this.input.keyboard.createCursorKeys();
 
       this.physics.add.collider(player, platforms);
        this.physics.add.collider(player, cube);
        this.physics.add.collider(player, tower);
        //this.physics.add.collider(hongo, platforms);
        //this.physics.add.collider(hongo, cube);
        //this.physics.add.collider(hongo, tower);
        
        
        
        this.physics.add.collider(Gema, platforms);
        this.physics.add.overlap(Disparo,platforms,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,cube,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,tower,this.destruyebala,null,this)
        this.physics.add.overlap(Disparo,puas,this.destruyebala,null,this)
        this.physics.add.overlap(player,puas,this.quitalife,null,this)
        //this.physics.add.overlap(player,sig,this.siguiente,null,this)
        this.physics.add.overlap(player, Gema, this.collectGema, null, this);
        this.physics.add.overlap(player, llave, this.collectllave, null, this);
        this.physics.add.overlap(player, skull, this.collectskull, null, this);
        this.physics.add.overlap(player,enemigos,this.quitalife,null,this)
        this.physics.add.overlap(Disparo,enemigos,this.destruyehongo,null,this)
        this.physics.add.overlap(Disparo,enemigos,this.destruyebala,null,this)
        this.physics.add.overlap(player, lava, this.muerte, null, this);
        this.physics.add.overlap(player, sig, this.ganar, null,this);
        this.physics.add.overlap(enemigos, invisible, this.mover, null,this);
        this.life = 3 
 
     
        this.cameras.main.setBounds(0,0,4800,800)
        player.health = 100;
        player.maxHealth = 100;
        hurtBar = this.add.image(400, 20, "barraDaño")
        hurtBar.scrollFactorX = 0;
        hurtBar.scrollFactorY = 0;
 
        healthBar = this.add.image(400,20, "barraVida");
        healthBar.scrollFactorX = 0;
        healthBar.scrollFactorY = 0;
         
 
        
        Gema = this.physics.add.group();
        llave = this.physics.add.group();
        skull = this.physics.add.group();
        scoreText = this.add.text(300, 40, "Score: ", {fontSize: "32px", fill: "#FFFFFF"});
        scoreText.scrollFactorX = 0;
        scoreText.scrollFactorY = 0;
         
        scorevida = this.add.text(310, 8, "VIDAS: ", {fontSize: "28px", fill: "#FFFFFF"});
        scorevida.scrollFactorX = 0;
        scorevida.scrollFactorY = 0;
         
        this.scorelife = this.add.text(435, 8, "3", {fontSize: "28px", fill: "#FFFFFF"});
        this.scorelife.scrollFactorX = 0;
        this.scorelife.scrollFactorY = 0;
        
         
        this.score=0
        scoregem = this.add.text(435, 40, "0", {fontSize: "32px", fill: "#FFFFFF"});
        scoregem.scrollFactorX = 0;
        scoregem.scrollFactorY = 0;
        initialTime1=60
        timedEvent = this.time.addEvent({ delay: 1000, callback: this.onSecond, callbackScope: this, loop: true });
        timeText = this.add.text(1220, 16, 'Tiempo:', {  fontSize: '32px', fill: '#FFFFFF' });
        timeText.scrollFactorX = 0;
        timeText.scrollFactorY = 0;
         
       
        
    }
 
      
     
    
 
    update (){
         
     this.cameras.main.centerOn(player.x,player.y)
        if (btnDisparo.isDown && apuntado==false && (this.time.now>player.tiempoDisparo)){
             Disparo.create(player.x,player.y, 'Disparo' ).setVelocityX(300).body.allowGravity=false
             var sonido = this.sound.add('dispar');
             sonido.play()
             player.tiempoDisparo=this.time.now +400
            
        }
        else if (btnDisparo.isDown && apuntado==true && (this.time.now>player.tiempoDisparo)){
             Disparo.create(player.x,player.y, 'Disparo' ).setVelocityX(-300).body.allowGravity=false
             var sonido = this.sound.add('dispar');
             sonido.play()
             player.tiempoDisparo=this.time.now +400
 
        }
        if (this.time.now>player.recuperar){
           player.herido=false
        }
         
        if (life<=0){
             this.scene.start('GameOver') 
                 
        }
     
                
             
             
          
        if (cursors.left.isDown)
         {
            player.setVelocityX(-260);
 
            player.anims.play('left', true);
 
        }
        else if (cursors.right.isDown)
         {
            player.setVelocityX(260);
 
            player.anims.play('right', true);
 
        }
        else
         {
            player.setVelocityX(0);
 
            player.anims.play('turn');
        }
        if (cursors.up.isDown && player.body.touching.down)
         {   
            var sonido = this.sound.add('salto');
            sonido.play()
            player.setVelocityY(-300);
             
        } 
        
    } 
          
destruyehongo(bala,hongo){
    hongo.destroy()
    bala.destroy()
}
     
      
      
destruyebala(bala,muro){
    bala.destroy() 
 
}
collectskull(player, skull){
    skull.disableBody(true, true);
    var sonido = this.sound.add('Recolector');
    sonido.play()
    this.score += 15
    this.registry.set('scores', this.score);
    scoregem.setText(this.score); 
}
collectGema(player, Gema){
    Gema.disableBody(true, true);
    var sonido = this.sound.add('Recolector');
    sonido.play()
    this.score += 10
    this.registry.set('scores', this.score);
    scoregem.setText(this.score); 
}
collectllave(player, llave){
        llave.disableBody(true, true);
        var sonido = this.sound.add('Recolector');
        sonido.play()
        this.score += 20
        this.registry.set('scores', this.score);
        scoregem.setText(this.score); 
}
         
quitalife(){
         
    if (player.herido==false){
         
        life=life-1
        player.herido=true
        player.recuperar=this.time.now +1000
        this.registry.set("lifes", life)
        this.registry.events.on('changedata', (parent, key, data) => { 
            if (key === 'lifes')
            this.scorelife.setText(data)
        });
    }
       
}
muerte(){
    this.scene.start('GameOver')   
}
     
onSecond(){
    timeText.setText('Tiempo: ' + initialTime1);
    initialTime1 = initialTime1 - 1;
        if (initialTime1 === -1){
        this.scene.start('GameOver');
         
        }
}  
ganar(){
    //credits =this.add.image(4200, 650, "creditos").setScale(1.50)
    //credits.setInteractive()
     
     //sonido.play() ;
     this.scene.start('Creditos') ;
}  
 
 
 
}
 
