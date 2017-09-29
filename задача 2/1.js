function markShadow() {

    var images = document.getElementsByTagName('img');

    for (var i = 0; i < images.length; i++) {
        images[i].style.boxShadow = '10px 20px 30px black';
    }

}

markShadow();