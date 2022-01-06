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

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

    }

    function render(){
        for(var i in sprites){
            var spr = sprites[i];
            ctx.drawImage(spr.img, 0, 0, spr.width, spr.height, spr.x, spr.y, spr.width, spr.height);
        }
    }

    loop();
}());