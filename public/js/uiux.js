
var main_nav = document.querySelector('.ly-nav');
var btn_nav_open = document.querySelector('.btn-nav-open');
var btn_nav_close = document.querySelector('.btn-nav-close');
var nav_link = document.querySelectorAll('.nav-link');
btn_nav_open.addEventListener('click', function() {
  main_nav.style.display = 'block';
});
btn_nav_close.addEventListener('click', function() {
  main_nav.style.display = 'none';
})
