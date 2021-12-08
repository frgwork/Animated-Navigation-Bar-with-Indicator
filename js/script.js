const navBar = document.querySelector('.navbar');

document.querySelectorAll('.navbar ul li').forEach((li, i) => {
  li.addEventListener('click', e => {
    e.preventDefault();
    navBar.querySelector('.active').classList.remove('active');
    li.classList.add('active');

    const indicator = document.querySelector('.indicator');
    indicator.style.transform = `translateX(calc(${i * 90}px))`;
  });
});
