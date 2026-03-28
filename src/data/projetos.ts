export interface Projeto {  
  id: number  
  name: string  
  description: string  
  images: string[]  
  technologies: string[]
  githubUrl?: string
  demoUrl?: string 
}

export const projetos: Projeto[] = [
    {
        "id": 1,
        "name": "Krusty Burguer",
        "description": "Projeto de um sistema de pedidos para um restaurante, permitindo aos clientes fazerem pedidos online e aos funcionários gerenciarem os pedidos recebidos. Projeto onde pude trabalhar tanto no frontend quanto no backend, entendo melhor como funcionam as tecnologias utilizadas e como elas se comunicam para criar uma aplicação completa.",
        "images": ["/public/projetos/krusty/1.png", "/public/projetos/krusty/2.png", "/public/projetos/krusty/3.png", "/public/projetos/krusty/4.png", "/public/projetos/krusty/5.png"],
        "technologies": ["Node.js", "Express.js", "mySQL", "HTML", "CSS"],
        "githubUrl": "https://github.com/R4ULz/ProjetoInterdisciplinar-2sem-atualizado/tree/main",
    },
    {
         "id": 2,
        "name": "GoPlanner",
        "description": "Plataforma de planejamento e organização de tarefas, permitindo aos usuários criar listas de tarefas, definir prazos e acompanhar o progresso. Projeto onde trabalhei no frontend e pude entender melhor como criar interfaces amigaveis e intuitivas para os usuarios com React e Tailwind CSS",
        "images": ["/public/projetos/Goplanner/1.png", "/public/projetos/Goplanner/2.png", "/public/projetos/Goplanner/3.png", "/public/projetos/Goplanner/4.png", "/public/projetos/Goplanner/5.png", "/public/projetos/Goplanner/6.png", "/public/projetos/Goplanner/7.png", "/public/projetos/Goplanner/8.png", "/public/projetos/Goplanner/9.png", "/public/projetos/Goplanner/10.png", "/public/projetos/Goplanner/11.png"],
        "technologies": ["React", "Node.js", "TypeScript", "MongoDB"],
        "githubUrl": "https://github.com/R4ULz/go-planner"
    },
    {
        "id": 3,
        "name": "LeilãoFacil",
        "description": "Projeto de um motor de busca de leiloes de imoveis, onde e realizado um web scraping para obter os dados dos leiloes e disponibiliza-los em uma interface amigavel para os usuarios. Projeto onde trabalhei no backend, fiz as apis utilizando Node.js e MongoDB, e utilizei Python para realizar o web scraping.",
        "images": ["/public/projetos/LeilaoFacil/1.png", "/public/projetos/LeilaoFacil/2.png", "/public/projetos/LeilaoFacil/3.png"],
        "technologies": ["React", "Node.js", "TypeScript", "MongoDB", "Python"],
        "githubUrl": "https://github.com/Bonde-do-tigrinho/leilaoFacil-backEnd"
    },
    {
         "id": 4,
        "name": "GoPlanner Mobile",
        "description": "O Go Planner Mobile é uma aplicação móvel desenvolvida para simplificar a organização de viagens. Com ele, você pode criar atividades, convidar amigos, gerenciar viagens e manter todos os detalhes da sua aventura em um só lugar. Projeto onde trabalhei no frontend utilizando React Native, e pude entender melhor como criar interfaces responsivas e intuitivas para dispositivos móveis.",
        "images": ["/public/projetos/GoPlannerM/1.png", "/public/projetos/GoPlannerM/2.png", "/public/projetos/GoPlannerM/3.png", "/public/projetos/GoPlannerM/4.png", "/public/projetos/GoPlannerM/5.png", "/public/projetos/GoPlannerM/6.png"],
        "technologies": ["React Native", "TypeScript", "SpringBoot", "MongoDB"],
        "githubUrl": "https://github.com/Bonde-do-tigrinho/Go-Planner-Mobile"
    },
    {
        "id": 5,
        "name": "Monty Hall Simulator",
        "description": "Simulador do famoso problema de probabilidade conhecido como 'Monty Hall'. O simulador permite aos usuários experimentar diferentes estratégias para escolher entre três portas, onde uma delas esconde um prêmio e as outras duas estão vazias. Projeto que realizei quando estava aprendendo React, e foi uma ótima oportunidade para entender melhor como criar componentes reutilizáveis, gerenciar estado e lidar com eventos em uma aplicação React. Além disso, o projeto me permitiu aplicar conceitos de probabilidade e lógica para criar uma experiência interativa e educativa para os usuários.",
        "images": ["/public/projetos/MontyHall/1.png", "/public/projetos/MontyHall/2.png", "/public/projetos/MontyHall/3.png", "/public/projetos/MontyHall/4.png"],
        "technologies": ["React", "Next.js"],
        "githubUrl": "https://github.com/R4ULz/ProjetoMontyHall",
        "demoUrl": "https://projeto-monty-hall-seven.vercel.app/"
    },
    {
         "id": 6,
        "name": "Não Pode",
        "description": "Meu projeto recem finalizado, um jogo onde o jogador precisa fazer seu time acertar uma palavra sem dizer as palavras proibidas, utilizando dicas e estratégias para vencer os desafios. O jogo é divertido e desafiador, perfeito para testar suas habilidades de comunicação e raciocínio, com esse projeto pude aprender mais sobre frontend utilizando React, TypeScript e Tailwind CSS, e também sobre como criar uma experiência de jogo interativa e envolvente para os usuários.",
        "images": ["/public/projetos/NaoPode/1.png", "/public/projetos/NaoPode/2.png", "/public/projetos/NaoPode/3.png", "/public/projetos/NaoPode/4.png", "/public/projetos/NaoPode/5.png"],
        "technologies": ["React", "TypeScript", "Tailwind CSS"],
        "githubUrl": "https://github.com/R4ULz/nao-pode",
        "demoUrl": "https://nao-pode-red.vercel.app/"
    },
    {
        "id": 7,
        "name": "Descobrindo Cartas",
        "description": "Jogo onde o jogador precisa descobrir as cartas do Clash Royale através de emojis, jogo perfeito para testar seus conhecimentos sobre as cartas do jogo. Projeto onde melhorei minhas habilidade em frontend utilizando React, TypeScript e Tailwind CSS, e também sobre como criar uma experiência de jogo interativa e envolvente para os usuários.",
        "images": ["/public/projetos/DescobrindoCartas/1.png", "/public/projetos/DescobrindoCartas/2.png", "/public/projetos/DescobrindoCartas/3.png", "/public/projetos/DescobrindoCartas/4.png", "/public/projetos/DescobrindoCartas/5.png"],
        "technologies": ["React", "Typescript", "Tailwind CSS"],
        "githubUrl": "https://github.com/R4ULz/descobrindo-cartas",
        "demoUrl": "https://descobrindo-cartas.vercel.app/"

    },
    {
        "id": 8,
        "name": "Api da Champions League",
        "description": "Api da Champions League onde o usuario pode ser realizado um crud de Jogadores e pode ser listado os clubes. Api que desenvolvi para aprender  mais sobre o backend e como uma API Rest funciona.",
        "images": ["/public/projetos/ApiChampions/1.png", "/public/projetos/ApiChampions/2.png", "/public/projetos/ApiChampions/3.png"],
        "technologies": ["Node.js", "Typescript", "Express"],
        "githubUrl": "https://github.com/R4ULz/api-championsleague-node-ts-express",
    },
    {
        "id": 9,
        "name": "Api de equipes e pilotos de formula 1",
        "description": "Uma Minimal API desenvolvida com Fastify e TypeScript, que fornece dados de equipes e pilotos da temporada 2025 da Fórmula 1. Api desenvolvida para estudos e aprendizado sobre o backend.",
        "images": ["/public/projetos/ApiF1/carbon.png"],
        "technologies": ["Node.js", "Typescript", "Fastify"],
        "githubUrl": "https://github.com/R4ULz/minimal-api-com-fastify-e-ts",
    },
    {
        "id": 10,
        "name": "Api Podcast Manager",
        "description": "O Podcast Manager é um aplicativo no estilo Netflix, desenvolvido para centralizar episódios de podcasts em vídeo, organizados por categorias, permitindo fácil navegação e descoberta de conteúdo. Api foi desenvolvida sem nenhuma biblioteca ou framework, utilizando apenas Node.js e TypeScript, para entender melhor como funciona uma API Rest e os conceitos por trás dela, como rotas, controladores, modelos e persistência de dados.",
        "images": ["/public/projetos/ApiPodcast/1.png", "/public/projetos/ApiPodcast/2.png", "/public/projetos/ApiPodcast/3.png"],
        "technologies": ["Node.js", "Typescript"],
        "githubUrl": "https://github.com/R4ULz/projeto-node-ts-APIRest-sem-framworks-gerenciador-podcasts",
    },
]