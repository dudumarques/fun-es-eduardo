const caixaPrincipal= document.querySelector(".caixa-principal");
const caixaPerguntas= document.querySelector(".caixa-perguntas");
const caixaAlternativas= document.querySelector(".caixa-alternativas");
const caixaResultado= document.querySelector(".caixa-resultado");
const textoResultado= document.querySelector(".texto-resultado");


const perguntas = [
    {
        enunciado: "Você está em duvida aonde passar o fim de semana.Devo ir para?",
        alternativas: [
            {
                texto: " Um lugar traquilo",
                afirmacao: " Você prefere um lugar calmo, com poucas pessoas.",
            },
            {
                texto: " Um lugar agitado",
                afirmacao: " Você prefere um lugar movimentado, com várias pessoas.",
            }
        ]
    },
    {
        enunciado: " Qual seu gosto de paisagem?",
        alternativas: [
            {
                texto: " Natural ",
                afirmacao: " Você parece ter um gosto para a natureza e campos.",
            },
            {
                texto: " Urbanizada",
                afirmacao: " Você parece ter um gosto para cidade e lojas.",
            }
        ]
    },
    {
        enunciado: " Prefere ter contatos com animais?",
        alternativas: [
            {
                texto: " Sim",
                afirmacao: " Você é uma pessoa que se sente bem com animais e gosta do carinho que eles dão para você.",
            },
            {
                texto: " Não",
                afirmacao: " Você não gosta muito de animais ou tem medo deles.",
            }
        ]
    },
    {
        enunciado: " Qual tipo de piscina voê prefere?",
        alternativas: [
            {
                texto: " Naturais",
                afirmacao: " Você prefere cachoeiras, rios e lagos.",
            },
            {
                texto: " Sintéticas",
                afirmacao: " Você prefere parques aquáticos.",
            }
        ]
    },
    {
        enunciado: " Qual seu gosto para passar a noite?",
        alternativas: [
            {
                texto: " Cabanas e barracas",
                afirmacao: "Você vai ter uma paisagem para a natureza e uma noite mais tranquila.",
            },
            {
                texto: " Hotéis",
                afirmacao: " Você vai ter uma visão para a cidade.",
            }
        ]
    },
];


