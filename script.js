debugger;
let InputField = document.getElementById('InputDisplay');
InputField.value='';
let OutputField = document.getElementById('OutputDisplay');


 document.getElementById('0').addEventListener('click',function(){
        InputField.innerText+="0";
        InputField.value+='0';
    })

    document.getElementById('00').addEventListener('click',function(){
        InputField.innerText+='00'; 
        InputField.value+='00';
    })
    
    document.getElementById('1').addEventListener('click',function(){
        InputField.innerHTML+='1'; 
        InputField.value+='1';
    })
    
    document.getElementById('2').addEventListener('click',function(){
        InputField.innerText+='2';
        InputField.value+='2';
    })
    
    document.getElementById('3').addEventListener('click',function(){
        InputField.innerText+='3'; 
        InputField.value+='3';
    })
    
    document.getElementById('4').addEventListener('click',function(){
        InputField.innerText+='4';
        InputField.value+='4'; 
    })
    
    document.getElementById('5').addEventListener('click',function(){
        InputField.innerText+='5'; 
        InputField.value+='5';
    })
    
    document.getElementById('6').addEventListener('click',function(){
        InputField.innerText+='6'; 
        InputField.value+='6';
    })
    
    document.getElementById('7').addEventListener('click',function(){
        InputField.innerText+='7'; 
        InputField.value+='7';
    })
    
    document.getElementById('8').addEventListener('click',function(){
        InputField.innerText+='8'; 
        InputField.value+='8';
    })
    
    document.getElementById('9').addEventListener('click',function(){
        InputField.innerText+='9'; 
        InputField.value+='9';
    })

    document.getElementById('Dot').addEventListener('click',function(){
        InputField.innerText+='.'; 
        InputField.value+='.';
    })

    document.getElementById('CE').addEventListener('click',function(){
        InputField.innerText=" "; 
        OutputField.innerText=" "; 
        InputField.value="";
    })

    document.getElementById('Erase').addEventListener('click',function(){
        InputField.value = InputField.value.slice(0,-1); 
        InputField.innerHTML=InputField.value;
    })

    document.getElementById('Percent').addEventListener('click',function(){
       
        OutputField.innerText= ((eval(InputField.value)/100)); 
    })

    document.getElementById('Sum').addEventListener('click',function(){
        InputField.innerHTML+='+';
        InputField.value+='+';
    })

    document.getElementById('Minus').addEventListener('click',function(){
        InputField.innerText+='-'; 
        InputField.value+='-';
    })

    document.getElementById('Multiply').addEventListener('click',function(){
        InputField.innerText+='*'; 
        InputField.value+='*';
    })

    document.getElementById('Divide').addEventListener('click',function(){
        InputField.innerText+='/';
        InputField.value+='/';
    })

    document.getElementById('Equal').addEventListener('click',function(){

        try{
             OutputField.innerText = eval(InputField.value);     
        }

        catch(err)
        {
            alert("Invalid Calculation");

        }
    })


