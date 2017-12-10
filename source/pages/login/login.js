import 'normalize.css';
import './login.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Главная', 'Обо мне', 'Блог', 'Мои работы'], 'menu');

document.body.appendChild(menu);

console.log('in login.js');