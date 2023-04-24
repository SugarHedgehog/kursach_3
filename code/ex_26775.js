(function () {
    'use strict';
    NAinfo.requireApiVersion(0, 2);
    let znam, chisl_1, chisl_2;
    chisl_1 = Math.pow(sluchch(1, 5), 2);
    chisl_2 = chisl_1 * Math.pow(sluchch(1, 10), 2);
    znam = chisl_1 + chisl_2;

    let ugol = om.latbukv.iz();
    let k = sluchch(0, 100);
    let graniz = [
        ['(${k.texfracpi(1)};${(k + 0.5).texfracpi(1)})', 1, 1, 'I'],
        ['(${(k + 0.5).texfracpi(1)};${(k + 1).texfracpi(1)})', -1, 2, 'II'],
        ['(${(k + 1).texfracpi(1)};${(k + 1.5).texfracpi(1)})', 1, 3, 'III'],
        ['(${(k + 1.5).texfracpi(1)};${(k + 2).texfracpi(1)})', -1, 4, 'VI'],
    ].iz();
    let zn_1, zn_2, zn_3, minus_1 = '',
        minus_2 = '',
        grelets = '';
    switch (sluchch(0, 1)) { //выбираем исходные данные и что будем искать
        case 0:
            zn_1 = '\\tg';
            zn_2 = '\\cos';
            zn_3 = '\\sin';
            if ((graniz[2] == 2) || (graniz[2] == 3)) // cos<0? Возможно, это можно как-то упростить.
                minus_1 = '-';
            if ((graniz[2] == 3) || (graniz[2] == 4)) { //sin<0?
                grelets = '<';
                minus_2 = '-';
            } else
                grelets = '>';
            break;
        case 1:
            zn_1 = '\\ctg';
            zn_2 = '\\sin';
            zn_3 = '\\cos';
            if ((graniz[2] == 3) || (graniz[2] == 4)) //sin<0?
                minus_1 = '-';
            if ((graniz[2] == 2) || (graniz[2] == 3)) // cos<0?
            {
                minus_2 = '-';
                grelets = '<';
            } else
                grelets = '>';
            break;
    }
    let answ = graniz[1] * Math.sqrt(chisl_2 / chisl_1);
    grelets = '(Угол ${ugol} принадлежит ${graniz[3]} четверти - $${zn_3}{${ugol}}${grelets}0$)'

    NAtask.setTask({
        text: 'Найдите $${zn_1}{${ugol}}$, если $${zn_2}{ ${ugol}}=${minus_1}
        \\sqrt{ \\frac{ ${ chisl_1 }}{${ znam } }}$ и $${ ugol } \\in ${ graniz[0] } $.',
        answers: answ,
        analys: 'Найдём $${zn_3}{${ugol}}=\\sqrt{1-(${minus_1}
        \\sqrt\\frac{${ chisl_1 } } {${ znam } }})^ { 2}=${ minus_2 }
        \\sqrt{ \\frac{${ chisl_2 } } {${ znam } } }$${ grelets }. ' +
        'Тогда $${zn_1}{${ugol}}=${' - '.esli(!graniz[2] % 2)}\\sqrt{\\frac{${chisl_2}}{${chisl_1}}}=${answ}$',

    });
}) ();
//Обзад  26775
