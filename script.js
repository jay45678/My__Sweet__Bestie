const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next')) {
    slider.appendChild(items[0]); // Moves first item to end
  } else if (e.target.matches('.prev')) {
    slider.prepend(items[items.length - 1]); // Moves last item to start
  }
}

document.addEventListener('click', activate, false);

// 🌟 Add swipe support for mobile users
let startX = 0;
document.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    slider.appendChild(document.querySelector('.item')); // Swipe left (Next)
  } else if (endX - startX > 50) {
    slider.prepend(document.querySelector('.item:last-child')); // Swipe right (Prev)
  }
});
