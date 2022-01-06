(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //Recursos do jogo 
    var background =  new Image();
    background.src = "img/scene.png";

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

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

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