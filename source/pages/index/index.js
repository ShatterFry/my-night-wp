import 'normalize.css';
import '../../pages/base.scss';
import './index.scss';
import createMenu from '../../components/menu/menu';

let menu = createMenu(['Главная', 'Обо мне', 'Блог'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');
console.log($);
console.log(`string text line 1
string text line 2`);