import 'normalize.css';
import './my-works.scss';
import createMenu from '../../components/menu/menu';
import '../../components/slider/slider.scss';
import slider from '../../components/slider/slider.js';

slider();

let menu = createMenu(['Главная', 'Обо мне', 'Блог', 'Мои работы'], 'menu');

document.body.appendChild(menu);

console.log('in my-works.js');