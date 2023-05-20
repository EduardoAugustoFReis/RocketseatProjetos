let students = [
{
    name: "Ana",
    score1: 8.2,
    score2:  7.6
},
{
  name: "Daniel",
  score1: 7.4,
  score2:  6.7
},
{
  name: "Caio",
  score1: 3.7,
  score2:  5.8
}
]

function avarage(stud){
  let avg = ((stud.score1 + stud.score2) / 2).toFixed(2);
  
  if(avg >=7){
    alert(`
    A média do(a) aluno(a) ${stud.name} é: ${avg} 
    Parabéns, ${stud.name} você foi aprovado(a) no concurso
    `)
  }else{
    alert(`
    A média do(a) aluno(a) ${stud.name} é: ${avg}
    Não foi dessa vez, ${stud.name} ! Tente novamnete
    `)
  }
}

for(let stud of students){
  avarage(stud);
}
