//5! = 5*4*3*2*1 = 120
 
function fatorial(n){
    let fat = 1
    for(let res = n; res > 1 ; res--){
        fat*= res
    }
    return fat
 }

 console.log(fatorial(6))