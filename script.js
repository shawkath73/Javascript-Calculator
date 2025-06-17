let A=0
let operator=null
let B=null

function show(val)
{
    let display=document.getElementById("screen")
    if(display.value==='0'){
        display.value=val
    }
    else if(val==="."){
        if(display.value != "" && !display.value.includes(val)){
            display.value+=val;
        }
    }
    else if(val==="%")
    {
        display.value=Number(display.value)/100;
    }
    else if(val==="+/-"){
        if(display.value != "" && display.value != "0"){
            if(display.value[0]=="-"){
            display.value=display.value.slice(1)
            }
            else{
            display.value="-"+display.value
        }
        }
    }
    else{
        display.value+=val
    }
}

function clrscr()
{
    document.getElementById("screen").value=""
}

function dlt()
{
    let result=document.getElementById("screen")
    result.value=result.value.toString().slice(0,-1)
}

function eqval(val)
{
    let displa=document.getElementById("screen")
    if(val==="=")
    {
        if(A != null)
        {
            B=displa.value
            let numA=Number(A)
            let numB=Number(B)

            if(operator==="/"){
                displa.value=numA/numB
            }
            else if(operator==="*"){
                displa.value=numA*numB
            }
            else if(operator==="-"){
                displa.value=numA-numB
            }
            else if(operator==="+"){
                displa.value=numA+numB
            }
        }
    }
    else{
        operator=val
        A=displa.value
        displa.value=""
    }
}