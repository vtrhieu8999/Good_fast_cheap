

function troll (a, b, c){
    let i= document.getElementById(a);
    let j= document.getElementById(b);
    let k= document.getElementById(c);
    if(i.checked==true){
        if(j.checked && k.checked)
            j.checked= false;
    }
}