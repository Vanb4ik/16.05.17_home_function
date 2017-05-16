/*
 Написати функцію, яка буде шукати найменший елемент в масиві.
 */
var mass =[1,1.1,2,0,5,3,3];
function minIndexMass(arg)
{
    var temp =arguments[0][0];
    for (var i =0;i<arguments[0].length;i++)
    {
        if (temp>=arguments[0][i])
        {
            temp=arguments[0][i];
        }
    }
    return temp;
}
console.log(minIndexMass(mass));
