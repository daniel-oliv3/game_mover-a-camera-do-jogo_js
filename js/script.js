(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');

    //Recursos do jogo 
    var background =  new Image();
    background.src = "img/scene.png";

    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

    }

    function render(){
        ctx.drawImage(background, 0, 0, 800, 600, 0, 0, 800, 600);
    }

    loop();
}());