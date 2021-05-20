// JScript source code
{
    var str = document.inp.m.value;
    var int = parseInt(str);
    if (int == 1 || int == 2 || int == 12)
    { alert("Зимові місяці"); }
    else if (3 <= int && int <= 5)
    { alert("Весна"); }
    else if (6 <= int && int <= 8)
    { alert("Літо"); }
    else if (9 <= int && int <= 11)
    { alert("Осінь"); }
    else
    { alert("Невірно!"); }
     }