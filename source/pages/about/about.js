import 'normalize.css';
import './about.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Мои работы', 'Блог', 'Обо мне', 'Авторизация'], 'menu');

document.body.appendChild(menu);

console.log('in about.js');