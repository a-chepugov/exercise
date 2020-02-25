console.log('\n justLookAtMe ================\n\n');

var какЗдоровоПисатьПеременныеНаРодномЯзыке = 'А теперь посмотри на следующую строчку и подумай еще раз';
console.log('какЗдоровоПисатьПеременныеНаРодномЯзыке', какЗдоровоПисатьПеременныеНаРодномЯзыке);
var 题 = 'Угадай, что хотел сказать автор';
console.log('题', 题);

try {
    const variable = 1;
    variable = 2;
    console.log('Первая константа', variable);
} catch (error) {
    console.error('Упс, ошибка');
    console.error(error);
}

try {
    const variable = ['Нулевой элемент'];
    variable.push('Первый элемент');
    console.log('Вторая константа', variable);
} catch (error) {
    console.error('И снова ошибка');
    console.error(error);
}
