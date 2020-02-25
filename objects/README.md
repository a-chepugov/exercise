# Объекты 

- Переменной `user` присвоить объект со свойствами: `name` равное `John`, `surname` - `Doe` и `age` - `20`
- Создать в объекте `talkativeUser` метод `getFullName`, возвращающий полное имя (`<Имя><пробел><Фамилия>`) текущего объекта
- Создать функцию `putInto`, принимающую три аргумента (1 - объект для модификации, 2 - название нового свойства, 3 - значение нового свойства). Т.е. При выполнении кода 
```js
const target = {a: 1};
putInto(, 'b', 'W');
```
у объекта `target` должно появиться поле `b` со значением `W`.
```js
console.log(target); // {a: 1, b: 'W'}
```
- Создать функцию `multiplyFields(obj, multiplier)`, которая умножает все собственные (`hasOwnProperty`) свойства входящего объекта `obj` на значения второго входящего параметра `multiplier`.

- Создать класс `Cell` с методами `set` и `get`. Первый метод принимает одно значение и сохраняет его в свойство `value` экземпляра класса. Второй возвращает это значение.

## См. также

- [this](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this)

- [new](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new)

- [class](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/class)

- [hasOwnProperty](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

- [Symbol](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

- [Управление памятью](https://developer.mozilla.org/ru/docs/Web/JavaScript/Memory_Management)