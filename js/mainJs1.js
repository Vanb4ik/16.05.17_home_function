/*
 Написати функцію, яка буде виводити переданий їй масив
 через 1 елемент.
 */
 var mass =[1,1.1,2,2,5,3,3];
 function massOutput(arg)
 {
     for (var i =0;i<arguments[0].length;i+=2)
     {
        console.log(arguments[0][i]);
     }
 }

 massOutput(mass);