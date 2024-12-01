const items = document\.querySelectorAll('\.carousel__item');
let currentIndex = 0;

function showNextItem() {
  items[currentIndex]\.classList\.remove('active');
  currentIndex = (currentIndex + 1) % items\.length;
  items[currentIndex]\.classList\.add('active');
}

setInterval(showNextItem, 3000);