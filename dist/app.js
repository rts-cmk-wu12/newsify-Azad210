/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("let slideIndex = 1;\nshowSlides(slideIndex);\n\nconst continueButton = document.querySelector(\".slide-continue-btn\");\ncontinueButton.addEventListener(\"click\", function () {\n  plusSlides(1);\n});\n\nfunction plusSlides(n) {\n  let slides = document.getElementsByClassName(\"mySlides\");\n  slideIndex += n;\n\n  if (slideIndex > slides.length) {\n    window.location.href = \"login-page.html\";\n  } else {\n    showSlides(slideIndex);\n  }\n}\n\nfunction currentSlide(n) {\n  showSlides((slideIndex = n));\n}\n\nfunction showSlides(n) {\n  let i;\n  let slides = document.getElementsByClassName(\"mySlides\");\n  let dots = document.getElementsByClassName(\"dot\");\n\n  if (n > slides.length) {\n    slideIndex = 1;\n  }\n\n  if (n < 1) {\n    slideIndex = slides.length;\n  }\n\n  for (i = 0; i < slides.length; i++) {\n    slides[i].style.display = \"none\";\n  }\n\n  for (i = 0; i < dots.length; i++) {\n    dots[i].className = dots[i].className.replace(\" active\", \"\");\n  }\n\n  slides[slideIndex - 1].style.display = \"block\";\n  dots[slideIndex - 1].className += \" active\";\n}\n\n\n//# sourceURL=webpack://newsify-azad210/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/app.js"]();
/******/ 	
/******/ })()
;