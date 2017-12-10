import 'normalize.css';
import './login.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Мои работы', 'Обо мне', 'Блог'], 'menu');

document.body.appendChild(menu);

console.log('in login.js');