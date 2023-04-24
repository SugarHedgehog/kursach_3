(function () {
    NAinfo.requireApiVersion(0, 2);
    let ves = sluchch(10, 100);
    let pr1, pr2, answ;
    do {
        pr1 = sluchch(4, 20);
        pr2 = sluchch(70, 90);
        answ = (ves * (100 - pr1)) / (100 - pr2);
    } while (!(answ * 100).isZ());
    NAtask.setTask({
        text: 'Изюм получается в процессе сушки винограда. Сколько килограммов винограда потребуется для получения 2 килограммов изюма,если виноград содержит 90 % воды,а изюм содержит 5 % воды ? ',
        answers: 0,
    });
})();      