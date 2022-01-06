(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //Recursos do jogo 
    var background =  new Image();
    background.src = "img/scene.png";

    var monster =  new Image();
    monster.src = "img/monster.png";

    //Objetos
    var sprites = [];

    var gameWorld = {
        img: background,
        x: 0,
        y: 0,
        width: 800,
        height: 600
    };

    sprites.push(gameWorld);

    //personagem
    var char = {
        img: monster,
        x: 0,
        y: 0,
        width: 64,
        height: 64
    }

    sprites.push(char);

    //Centralizar o personagem
    char.x = (gameWorld.width - char.width)/2;
    char.y = (gameWorld.height - char.height)/2;

    var cam = {
        x: 0,
        y: 0,
        width: cnv.width,
        height: cnv.height,
        leftEdge : function(){
            return this.x + (this.width * 0.25);  
        },
        rightEdge : function(){
            return this.x + (this.width * 0.75);  
        },
        topEdge : function(){
            return this.y + (this.height * 0.25);  
        },
        bottomEdge : function(){
            return this.y + (this.height * 0.75);  
        }
    }

    //Centralizar a câmera
    cam.x = (gameWorld.width - cam.width)/2;
    cam.y = (gameWorld.height - cam.height)/2;


    //Move o personagem
    var mvLeft = mvRight = mvUp = mvDown = false;

    //pressionar a tecla
    window.addEventListener('keydown', function(e){
        var key = e.keyCode;
        switch(key){
            case 37:
                mvLeft = true;
                break;
            case 39:
                mvRight = true;
                break;
            case 38:
                mvUp = true;
                break;
            case 40:
                mvDown = true;
                break;
        }
    }, false);

    //libera a tecla
    window.addEventListener('keyup', function(e){
        var key = e.keyCode;
        switch(key){
            case 37:
                mvLeft = false;
                break;
            case 39:
                mvRight = false;
                break;
            case 38:
                mvUp = false;
                break;
            case 40:
                mvDown = false;
                break;
        }
    }, false);


    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){
        if(mvLeft && !mvRight){
            char.x -= 2;
        }
        if(mvRight && !mvLeft){
            char.x += 2;
        }
        if(mvUp && !mvDown){
            char.y -= 2;
        }
        if(mvDown && !mvUp){
            char.y += 2;
        }

        //Limite da char/ personagem
        if(char.x < 0){
            char.x = 0;
        }
        if(char.x + char.width > gameWorld.width){
            char.x = gameWorld.width - char.width;
        }
        if(char.y < 0){
            char.y = 0;
        }
        if(char.y + char.height > gameWorld.height){
            char.y = gameWorld.height - char.height;
        }

        //Atualizar a posição da câmera em função ao char
        if(char.x < cam.leftEdge()){
            cam.x = char.x - (cam.width * 0.25);
        }
        if(char.x + char.width > cam.rightEdge()){
            cam.x = char.x + char.width - (cam.width * 0.75);
        }
        if(char.y < cam.topEdge()){
            cam.y = char.y - (cam.height * 0.25);
        }
        if(char.y < cam.bottomEdge()){
            cam.y = char.y + char.height - (cam.height * 0.75);
        }

        //Limite da câmera
        if(cam.x < 0){
            cam.x = 0;
        }
        if(cam.x + cam.width > gameWorld.width){
            cam.x = gameWorld.width - cam.width;
        }
        if(cam.y < 0){
            cam.y = 0;
        }
        if(cam.y + cam.height > gameWorld.height){
            cam.y = gameWorld.height - cam.height;
        }
    }

    function render(){
        ctx.save();
        ctx.translate(-cam.x, -cam.y);
        for(var i in sprites){
            var spr = sprites[i];
            ctx.drawImage(spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height);
        }
        ctx.restore();
    }

    loop();
}());