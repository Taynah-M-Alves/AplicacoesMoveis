interface Aluno {
    nome: string, 
    notas: number[],
    matricula :string
}

function calcularMedia(aluno: Aluno): number {
    let soma = 0
    for (const n of aluno.notas){
        soma = n + soma
    }

    return soma/aluno.notas.length
}
