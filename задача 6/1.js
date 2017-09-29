function underline(tag) {



    var a = document.getElementsByTagName(tag);
    for (var i =0; i<a.length; i++){
        a[i].style.textDecoration = 'underline';
    }


}

underline('p');