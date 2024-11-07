function calcul ()
{
    var a =  document.getElementById('t2').value;
    var b =  document.getElementById('t3').value;
    document.getElementById('t4').value=Number(a)*Number(b);
    return t4 ;
    
}


function calcul1 ()
{
    var a =  document.getElementById('a2').value;
    var b =  document.getElementById('a3').value;
    document.getElementById('a4').value=Number(a)*Number(b);
    
}
function calcul2 ()
{
    var a =  document.getElementById('b1').value;
    var b =  document.getElementById('b2').value;
    document.getElementById('b4').value=Number(a)*Number(b);
    
}
function submit ()
{ 
calcul();
calcul1();
calcul2();
    
}
function reset ()
{
    document.getElementById('t1').value = '';
    document.getElementById('t2').value = '';
    document.getElementById('t3').value = '';
    document.getElementById('a1').value = '';
    document.getElementById('a2').value = '';
    document.getElementById('a3').value = '';
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('a4').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('t4').value = '';
}

