//usando enum
enum DiasDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}

//usando Type para representar um compromisso
type Compromisso = {
    dia: DiasDaSemana;
    descricao: string;
}

//criando lista de compromisso
const compromissos: Compromisso[] = [
    { dia: DiasDaSemana.Segunda, descricao: "Reunião de equipe" },
    { dia: DiasDaSemana.Quarta, descricao: "Almoço com o Boss" },
    { dia: DiasDaSemana.Sexta, descricao: "HappyHour com amigos" },
];

//iterando com forEach sobre os compromissos
compromissos.forEach(compromisso => {
    console.log(`Compromisso na ${DiasDaSemana[compromisso.dia]}: ${compromisso.descricao}`);
});

//usar um map
const compromissosFormatados = compromissos.map(compromisso => ({
    diaDaSemana: DiasDaSemana[compromisso.dia],
    descricao: compromisso.descricao
}));

console.log(compromissosFormatados);

