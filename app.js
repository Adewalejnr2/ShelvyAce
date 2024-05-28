//hello world
const openEl = document.querySelector('.open-btn');
const closeEl = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('.sidebar');

openEl.addEventListener('click', function () {
  sidebarEl.classList.add('open');
});

closeEl.addEventListener('click', function () {
  sidebarEl.classList.remove('open');
});
console.log('hello');
