let funcionario1 : {codigo : number , nome : string}={
    codigo: 10,
    nome: 'John'
};

let funcionario2 ={
    codigo: 10,
    nome: 'John'
};

interface funcionario{
    codigo: number,
    nome: string,
    profissao?:string
}

let funcionario3 : funcionario = {
    codigo:100,
    nome:'José'
}

let funcionario4 : funcionario = {
    codigo:200,
    nome:'João',
    profissao: 'Padeiro'
}

