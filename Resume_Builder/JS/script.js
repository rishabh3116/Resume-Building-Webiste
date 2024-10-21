function changeColor() {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');
    var button = document.getElementById('button');
    var item = document.getElementById('item');

    var scrollValue = window.scrollY;
    if (scrollValue < 150) {
      navbar.classList.remove('active');
      logo.classList.remove('logo-white');
      button.classList.remove('button-white');
      item.classList.remove('item-white');
      
    }
    else{
        navbar.classList.add('active');
        logo.classList.add('logo-white');
        button.classList.add('button-white');
        item.classList.add('item-white');
    }

}
window.addEventListener('scroll', changeColor);