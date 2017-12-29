import 'normalize.css';
import '../../pages/base.scss';
import './my-works.scss';
import createMenu from '../../components/menu/menu';
import '../../components/slider2/slider.scss';
import slider from '../../components/slider2/slider.js';
import '../../app.js';

slider();

let menu = createMenu(['Мои работы','Блог','Обо мне','Авторизация'], 'menu');
//document.body.appendChild(menu);

console.log('in my-works.js');