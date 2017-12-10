import 'normalize.css';
import './my-works.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Главная', 'Обо мне', 'Блог', 'Мои работы'], 'menu');

document.body.appendChild(menu);

console.log('in my-works.js');