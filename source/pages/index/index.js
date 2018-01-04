import 'normalize.css';
import './index.scss';
import createMenu from '../../components/menu/menu';
import '../../app.js';

let menu = createMenu(['Главная', 'Обо мне', 'Блог'], 'menu');
//document.body.appendChild(menu);

console.log('in index.js');
console.log($);
console.log(`string text line 1
string text line 2`);