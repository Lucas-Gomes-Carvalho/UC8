var idade = 18;

if (idade.lenght<18) {
    console.log("Cadastro não permitido, é necessário a maior idade para realizar cadastro");
}else {
    console.log("Cadastro realizado com sucesso");
} //Referencia ao cadastro pessoal ao app

var participantes = 100;

if (participantes.lenght>=100){
    console.log("Negar cadastro ao evento");
}else {
    console.log("Cadastro realizado com sucesso");
} //Referencia ao interesse no evento

var diaDoEvento = 32 || 0

if (diaDoEvento.lenght>=31 || 1){
    console.log("Aceitar valor para dia")
}else {
    console.log("Recusar valor atribuido")
}

var mesDoEvento = 12

if (mesDoEvento.lenght<1 || 13){
    console.log("Mês invalido")
}else {
    console.log("Mês valido")
}

var anoDoEvento = 2021

if(anoDoEvento!= 2021){
    console.log("Ano invalido")
}else {
    console.log("Ano valido")
}
//Como juntar as 3 string???
