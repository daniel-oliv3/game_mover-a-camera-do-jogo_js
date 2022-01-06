(function(){
    var cnv = document.querySelector('canvas');
    var ctx = cnv.getContext('2d');


    function loop(){
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }

    function update(){

    }

    function render(){
        
    }

});