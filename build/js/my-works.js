webpackJsonp([0],{12:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}t(0),t(13);var l=o(t(1));t(14);(0,o(t(15)).default)();var c=(0,l.default)(["Главная","Обо мне","Блог","Мои работы"],"menu");document.body.appendChild(c),console.log("in my-works.js")},13:function(n,e){},14:function(n,e){},15:function(n,e){function t(n){o[i].className="slide",i=(n+o.length)%o.length,o[i].className="slide showing"}var o=document.querySelectorAll("#slides .slide"),l=document.getElementById("next"),c=document.getElementById("previous"),u=document.querySelectorAll(".controls"),i=0;n.exports=function(){0!==o.length&&(l.onclick=function(){t(i+1)},c.onclick=function(){t(i-1)},function(){for(var n=0;n<u.length;n++)u[n].style.display="inline-block"}())}}},[12]);