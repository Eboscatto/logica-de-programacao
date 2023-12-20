let nomeHeroi = "Everaldo"
let qtdeXp = 10001

if(qtdeXp < 1000){
    console.log("O herói de nome " + nomeHeroi + " está no nível Ferro!")
}
else if((qtdeXp >= 1001) && (qtdeXp <= 2000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Bonze!")
}
else if((qtdeXp >= 2001) && (qtdeXp <= 5000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Prata!")
}
else if((qtdeXp >= 6001) && (qtdeXp <= 7000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Ouro!")
}
else if((qtdeXp >= 7001) && (qtdeXp <= 8000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Platina!")
}
else if((qtdeXp >= 8001) && (qtdeXp <= 9000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Ascedente!")
}
else if((qtdeXp >= 9001) && (qtdeXp <= 10000)){
    console.log("O herói de nome " + nomeHeroi + " está no nível Imortal!")
}
else if(qtdeXp >= 10001){
    console.log("O herói de nome " + nomeHeroi + " está no nível Radiante!")
}
else{
    console.log("Sem nível definido!")
}
