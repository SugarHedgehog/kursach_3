(function () {
    'use strict';
    NAinfo.requireApiVersion(0, 2);
    let child_1 = sklonlxkand(['Петя', 'Коля', 'Вася', 'Ваня', 'Саша', 'Женя', 'Никита', 'Арсений', 'Антон', 'Яков',
        'Рома', 'Олег', 'Кирилл', 'Данил', 'Даниил', 'Арик', 'Ярик', 'Фома', 'Дима', 'Артём', 'Матвей', 'Максим', 'Игорь'
    ].iz()),
        child_2 = ['Алёна', 'Саша', 'Женя', 'Вика', 'Арина', 'Маша', 'Лена', 'Оля', 'Катя', 'Марина', 'Аня', 'Наташа',
            'Ирина', 'Настя', 'Ирма', 'Кристина', 'Ира', 'Мила', 'Тома', 'Любовь3', 'Вера', 'Надежда', 'Снежана',
        ].iz(),
        work = sklonlxkand(['работа', 'тест'].iz()),
        nosame = 'одинаковый',
        answ = ['выполнять ', 'решать ', 'делать '].iz();
    let job, doing, kr = '';
    if (work.ie == 'тест') {
        job = sklonlxkand('вопрос');
        doing = 'отвечает';
        answ = 'отвечать на ';
    } else {
        job = sklonlxkand(['задание', 'задача', 'пример', 'номер'].iz());
        kr = ['контрольную', 'проверочную', 'экзаменационную'].iz();
        doing = ['решает', 'делает'].iz();
    }
    let v1 = sluchch(5, 9),
        v2 = v1 + 1,
        razn;
    if (v1 == 7)
        razn = [30, 60].iz();
    else
        razn = sluchch(20, 60, 10);
    if (work.ie == 'работа')
        nosame = 'одинаковую';
    NAtask.setTask({
        text: '' + child_1.ie + ' и ' + child_2 + ' выполняют ' + nosame + '  ' + kr.esli(work.ie == 'работа') + ' ' +
            work.ve + '. ' + child_2 + ' ' +
            doing + '  за час  ' + 'на'.esli(work.ie == 'тест') + ' ' + v1 + ' ' + job.rm + '   ' + work.re + ', а ' +
            child_1.ie + '' +
            'на'.esli(work.ie == 'тест ') + '  ' + v2 + '.' +
            ' Они одновременно начали ' + answ + ' ' + job.vm + ', ' +
            'и  ' + child_2 + '  закончила  ' + work.ve + '  позже  ' + child_1.re + '  на ' + razn + ' ' +
            'минут. Сколько   ' + job.rm + '   содержит   ' + work.ie + '?',
        answers: (razn * v1 * v2) / (60 * (v2 - v1)),
    });
})();
//Обзад 99621
