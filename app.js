//hello world 
const openEl = document.querySelector('.open-btn');
const closeEl = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('.sidebar');

openEL.addEventListener('click', function () {
  sidebarEl.classList.add('open');
});

closeEl.addEventListener('click', function () {
  sidebarEl.classList.remove('open');
});
