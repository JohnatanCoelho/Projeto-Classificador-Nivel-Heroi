let nome = "John"
let xpHeroi = 900

for(let i = 0; i < 3; i++){
if(xpHeroi <= 1000 ){
    console.log(`O Herói de nome ${nome} está no nível de Ferro`)
}
else if((xpHeroi >= 1001) && (xpHeroi <= 2000)){
    console.log(`O Herói de nome ${nome} está no nível de Bronze`)
}
else if((xpHeroi >= 2001) && (xpHeroi <= 5000)){
    console.log(`O Herói de nome ${nome} está no nível de Prata`)
}
else if((xpHeroi >= 5001) && (xpHeroi <= 7000)){
    console.log(`O Herói de nome ${nome} está no nível de Ouro`)
}
else if((xpHeroi >= 7001) && (xpHeroi <= 8000)){
    console.log(`O Herói de nome ${nome} está no nível de Platina`)
}
else if((xpHeroi >= 8001) && (xpHeroi <= 9000)){
    console.log(`O Herói de nome ${nome} está no nível de Ascendente`)
}
else if((xpHeroi >= 9001) && (xpHeroi <= 10000)){
    console.log(`O Herói de nome ${nome} está no nível de Imortal`)
}
else if(xpHeroi >= 10000){
    console.log(`O Herói de nome ${nome} está no nível de Radiante`)
}}