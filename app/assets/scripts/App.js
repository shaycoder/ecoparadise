import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';

import AOS from 'aos';

// new MobileMenu();

const carouselEl = document.querySelector('#carouselEcoParadise');
if(carouselEl) {
  new Carousel(carouselEl, { interval: 3000,
  ride: 'carousel' });
}

AOS.init({
    duration: 1200
});

if(module.hot) {
    module.hot.accept()
}