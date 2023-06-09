'use strict';
// Пример №1
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических 
// операторов (сложение, вычитание и т.д.) найдите значения выражений:
// 7 + 2,
// 7 - 3,
// 2 * 4,
// 4 / 2,
// поместив результат каждого выражения в соответствующую 
// переменную. Например, let a1 = 7 + 2. Результаты переменных вывести в console.log();
let a1 = 7+2; // 9
let a2 = 7-3;// 4
let a3 = 2*4;// 8
let a4 = 4/2;// 2
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);


// Пример №2
// Напишите скрипт, который находит площадь прямоугольника высота 23см. 
// (в числовую переменную height), шириной 10см (в числовую переменную width), 
// значение площади должно хранится в числовой переменной s. (S=a*b);
let height = 23;
let width = 10;
let s;
s = height * width;
console.log(`S = ${s}`);


// Пример №3
// Создайте переменную str и присвойте ей значение 'qwerty'. Обращаясь к отдельным 
// символам этой строки выведите на экран символ 'q', символ 'w', символ 'r'.
let str = 'qwerty';
console.log(str[0]);
console.log(str[1]);
console.log(str[3]);

// Пример №4
// Напишите скрипт, который считает количество секунд в часе.
console.log(60 * 60);

// Пример №5
// Переделайте приведенный код так, чтобы в нем использовались операции 
// +=, -=, *=, /=, ++, --. 
// Количество строк кода при этом не должно измениться. Код для переделки:
// let num = 1;
// num = num + 12;
// num = num - 14;
// num = num * 5;
// num = num / 7;
// num = num + 1;
// num = num - 1;
// console.log(num);
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++;
num --; 
console.log(num);


// ДОМАШНЕЕ ЗАДАНИЕ

// Пример №1
// Создайте переменные b1, b2, b3, b4, b5. Поместите в них результат выражений:
// 5 % 3,
// 3 % 5,
// 5 + '3',
// '5' - 3,
// 75 + 'кг'
// Результаты переменных вывести в console.log();

let b1, b2, b3, b4, b5;

b1 = 5 % 3;
b2 = 3 % 5;
b3 = 5 + '3';
b4 = '5' - 3;
b5 = 75 + 'кг';

console.log(`b1 = ${b1}; b2 = ${b2}; b3 = ${b3}; b4 = ${b4}; b5 = ${b5};`);

// Пример №2 
// Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и 
// диаметром основания 4м (dC), результат поместите в переменную v.

let heightC = 10;
let dC = 4;
let v = 3.14 * ((dC / 2) ** 2) * heightC;

// Пример №3
// Создайте переменные a=10 и b=2. Выведите на экран их сумму, разность, произведение и частное (результат деления).

let a = 10;
let b = 2;

console.log(`a + b = ${a + b}; a - b = ${a - b}; a * b = ${a * b}; a / b = ${a / b};`);

// Пример №4
//  Создайте переменные c=15 и d=2. Просуммируйте их, а результат присвойте переменной result. 
//  Выведите на экран значение переменной result.

let c = 15;
let d = 2;
let result = c + d;

console.log(result);

// Пример №5
//  Создайте переменные a=10, b=2 и c=5. Выведите на экран их сумму.

/* Переменные назвал не по заданию, т.к. такие имена переменных уже существуют */
let a_1 = 10;
let b_1 = 2;
let c_1 = 5;

console.log(a_1 + b_1 + c_1);

// Пример №6
//  Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. 
//  Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат 
//  запишите в переменную result. Выведите на экран значение переменной result.

let a_2 = 17;
let b_2 = 10;
let c_2 = a_2 - b_2;
let d_2 = 7;
let result_2 = c_2 + d_2;

console.log(result_2);

// Пример №7
// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, (Имя)!'.

let name_1 = 'Владимир';

console.log(`Привет, ${name_1}!`);

// Пример №8
// Создайте переменную age и присвойте ей ваш возраст. Выведите на экран 'Мне (Возраст) лет!'.

let age = 42;

console.log(`Мне ${age} года!`);

// Пример №9
// Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите 
// на экран символ 'a', символ 'c', символ 'e'.

let str_1 = 'abcde';

console.log(`${str_1[0]}, ${str_1[2]}, ${str_1[4]}`);

//Пример №10
// Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

let numSeconds = 60 * 60; /* Количество секунд в часе */

console.log(`${numSeconds}, ${numSeconds * 24}, ${numSeconds * 24 * 31}`);

//Пример №11
//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. 
// Количество строк кода при этом не должно измениться.
// let num = 47;
// num = num + 7;
// num = num - 18;
// num = num * 10;
// num = num / 15;
// console.log(num);

let num_1 = 47;

num_1 += 7;
num_1 -= 18;
num_1 *= 10;
num_1 /= 15;

console.log(num_1);

// Пример №12
// Переделайте этот код так, чтобы в нем использовались операции ++ и --. 
// Количество строк кода при этом не должно измениться.
// let num = 10;
// num = num + 1;
// num = num + 1;
// num = num - 1;
// console.log(num);

let num_2 = 10;

num_2 ++;
num_2 ++;
num_2 --;

console.log(num_2);