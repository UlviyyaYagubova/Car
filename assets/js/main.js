let light = document.querySelector('img');
document.querySelector('.onoff').onclick = function(){
    if(light.src == "./assets/img/Img_06.png"){
        light.src = "./assets/img/Img_05.png"
    }else{
        light.src = "./assets/img/Img_06.png"
    }
}
document.querySelector('.move').onclick = function startAnimation() {
    document.querySelector(".surface").style.animation = "moveRight 6s linear infinite";
}
document.querySelector('.st').onclick = function startAnimation1() {
    document.querySelector('.car').classList.toggle = ('')
    document.querySelector(".car").style.animation = "move 1s linear infinite";
}
document.querySelector('.stop').onclick = function(){
    document.querySelector(".car").style.animation = "";
    document.querySelector(".surface").style.animation = "";
    light.src = "./assets/img/Img_05.png";
}