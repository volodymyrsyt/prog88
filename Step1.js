// JScript source code
{
    //Ввод строки
    var str = document.inp.m.value;
    //Преобразование строки в число
    var int = parseInt(str);
    //Проверка
    if (int == 1 || int == 2 || int == 12)
    { alert("Зима"); }
    else if (3 <= int && int <= 5)
    { alert("Весна"); }
    else if (6 <= int && int <= 8)
    { alert("Лето"); }
    else if (9 <= int && int <= 11)
    { alert("Осень"); }
    else if (12 <= int && int <= 15)
    { alert("Весна"); }

   
}