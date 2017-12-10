import 'normalize.css';
import './about.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Главная', 'Обо мне', 'Блог', 'Мои работы'], 'menu');

document.body.appendChild(menu);

console.log('in about.js');