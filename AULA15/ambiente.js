let num = [5,8,4]
num.push(1)
num[4]= 7
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`)
//console.log(num[0])
console.log(`O primeiro valor do array é ${num[0]}`)
let pos = num.indexOf(9)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor 4 está na posição ${pos}`)
}
