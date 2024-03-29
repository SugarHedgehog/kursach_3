(function() {
    'use strict';
    NAinfo.requireApiVersion(0, 0);
    let ill = sklonlxkand(['гепатит', 'криворучие', 'соннис', 'забыватикус', 'переленеус', 'шоколадодифицит',
        'антилогизм',
        'диабет', 'Ёжико-вирус', 'перфектолиз', 'трудоголизм', 'хладоручие', 'жмотство', 'физико-зависимость',
        'Фентезикоз',
    ]).iz();
    let persons = sklonlxkand(['физик', 'химик', 'школьник', 'чудик', 'чиновник', 'президент', 'пациент', 'студент',
        'математик',
    ]).iz();
    let realRez, lozhRez, realIll, answ, prAnsw1, prAnsw2;
    do {
        realRez = sluchch(30, 95);
        lozhRez = sluchch(2, 10);
        realIll = sluchch(1, 95);
        prAnsw1 = (realRez * realIll) / 10000;
        prAnsw2 = (lozhRez * (100 - realIll)) / 10000;
        answ = (realRez * realIll + lozhRez * (100 - realIll)) / 10000;
    } while (!(answ * 10000.0).isZ());
    let Rez;
    if (sl1())
        Rez = 'положительным';
    else {
        Rez = 'отрицательным';
        answ = 1 - answ;
    }
    let veroyt = ['с вероятностью ', 'в '];
    if (sl1())
        realRez /= 100;
    if (sl1())
        lozhRez /= 100;
    if (sl1())
        realIll /= 100;

    let find = ['вероятность', 'процент'];
    if (sl1())
        find.pop();
    else {
        find.shift();
        answ *= 100;
    }
    NAtask.setTask({
        text: '	Всем ${persons.dm} с подозрением на ${ill.ve} делают анализ крови. ' +
            'Если анализ выявляет ${ill.ve}, то результат анализа называется положительным. ' +
            'У больных ${ill.te} ${persons.rm} анализ даёт положительный результат ${veroyt[0].esli(realRez<1)} ${veroyt[1].esli(realRez>1)} ${realRez.ts()}${'\ %
            '.esli(realRez>1)}. ' +
            'Если ${persons.im} не болен ${ill.te}, то анализ может дать ложный положительный результат ${veroyt[0].esli(lozhRez<1)} ${veroyt[1].esli(lozhRez>1)} ${lozhRez.ts()}${'\ %
            '.esli(lozhRez>1)}. ' +
            'Известно, что ${realIll.ts()}${'\ %
            '.esli(realIll>1)} ${persons.rm}, поступающих с подозрением на ${ill.ve}, действительно больны ${ill.te}. ' +
            'Найдите ${find} того, что результат анализа у ${persons.rm}, поступившего в клинику с подозрением на ${ill.ve}, будет ${Rez}.',
        answers: answ,
        analys: 'Анализ ${persons.rm} может быть положительным по двум причинам:' +
            ' 1) ${persons.ie} болеет ${ill.te}, его анализ верен; 2) пациент не болеет ${ill.te}, его анализ ложен.' +
            ' По формуле условной вероятности: $${realRez.ts()}${' / 100 '.esli(realRez>1)}\\cdot${realIll.ts()}${' / 100 '.esli(realIll>1)} = ${prAnsw1.ts()}$' +
            ' и $${lozhRez.ts()}${' / 100 '.esli(lozhRez>1)}\\cdot(1-${realIll.ts()}${' / 100 '.esli(realIll>1)}) = ${prAnsw2.ts()}$. ' +
            'События быть больным или быть здоровым образуют полную группу (они несовместны и одно из них непременно наступает),' +
            ' поэтому можно применить формулу полной вероятности. Тогда $${prAnsw1.ts()}+${prAnsw2.ts()}=${(prAnsw1+prAnsw2).ts()}$. ' +
            '${'
        Необходимо найти,
        что анализ будет отрицательным: $1 - ${
            (prAnsw1 + prAnsw2).ts()
        }
        $.
        '.esli(Rez == '
        отрицательным ')} ' +
        '${'
        Так как нужно найти процент,
        умножим полученный ответ на 100: $${
            (prAnsw1 + prAnsw2).ts()
        }\\
        cdot100 = ${
            answ.ts()
        }
        $ '.esli(find=='
        процент ')} ' +
        'Ответ: $${answ.ts()}$',
    });

})();
//  320207
