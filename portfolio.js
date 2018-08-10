function scrollDown(x, y){
    window.scrollBy({
        top: y,
        left: x,
        behavior: 'smooth'
    });
}

function scrollToAbout(){
    var topPos = document.getElementById('about').offsetTop;
    document.getElementById('container').scrollTop = topPos-10;
  }