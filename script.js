
//primeira questão
let valueYear = document.querySelector('#input');
let typeYear = document.querySelector('#input-type');

function centuryCrusher(){
    var result = Number(valueYear.value)/100;

    //empty string validation
    if(valueYear.value === ''){
        return alert('Erro: Digite um valor para o ano');
    };

    //logic
    if(Number.isInteger(result)){
        document.querySelector('#response').innerHTML=
        `O ano de ${valueYear.value} pertence ao século ${result} ${typeYear.value}`;
    }else{
        document.querySelector('#response').innerHTML=
        `O ano de ${valueYear.value} pertence ao século ${Math.floor(result)+1} ${typeYear.value}`;
    };
};

let valueNumber = document.querySelector('input[name=prime]');



//Segunda questão
//prime number
function sumPrimes(prime){
    prime = Number(valueNumber.value);
    var response = document.querySelector(".response-prime");
    var result = 0;
    var divider;
    
    //empyt string validation
    if(prime.value===''){
        return alert('Erro: Digite um número primo');
    };

    //logic: is a prime number? and sum
    for (let i = 2; i<=prime;i++){
        divider=0;  
        for(var count=1; count<=i; count++){
            if(i%count === 0){
                divider++;
            };
            
        };
        if(divider == 2){
            result += i; 
        }    
    };
    response.innerHTML=`O resultado da soma dos números primos é ${result}`;
          
};
