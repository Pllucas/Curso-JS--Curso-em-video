let valores= [5,3,2,1,4]
valores.sort()
/*console.log(valores)
console.log(valores.sort())
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for( let pos in valores){
    console.log(`A posição  ${pos} tem o valor ${valores[pos]}`)
}
