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
        "description": "Projeto de um sistema de pedidos para um restaurante, permitindo aos clientes fazerem pedidos online e aos funcionários gerenciarem os pedidos recebidos.",
        "images": ["https://images.unsplash.com/photo-1773061941695-43568f71bee9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1773061941695-43568f71bee9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
        "technologies": ["Node.js", "Express.js", "mySQL", "HTML", "CSS"],
        "githubUrl": "https://github.com/R4ULz/ProjetoInterdisciplinar-2sem-atualizado/tree/main",
    },
    {
         "id": 2,
        "name": "GoPlanner",
        "description": "Plataforma de planejamento e organização de tarefas, permitindo aos usuários criar listas de tarefas, definir prazos e acompanhar o progresso.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React", "Node.js", "TypeScript", "MongoDB"],
        "githubUrl": "https://github.com/R4ULz/go-planner"
    },
    {
        "id": 3,
        "name": "LeilãoFacil",
        "description": "Projeto de um motor de busca de leiloes de imoveis, onde e realizado um web scraping para obter os dados dos leiloes e disponibiliza-los em uma interface amigavel para os usuarios.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React", "Node.js", "TypeScript", "MongoDB", "Python"],
        "githubUrl": "https://github.com/LeandroRodrigues061/PI-Motor-de-Busca-4-sem"
    },
    {
         "id": 4,
        "name": "GoPlanner Mobile",
        "description": "O Go Planner é uma aplicação móvel desenvolvida para simplificar a organização de viagens. Com ele, você pode criar atividades, convidar amigos, gerenciar viagens e manter todos os detalhes da sua aventura em um só lugar.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080", "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React Native", "TypeScript", "SpringBoot", "MongoDB"],
        "githubUrl": "https://github.com/Bonde-do-tigrinho/Go-Planner-Mobile"
    },
    {
        "id": 5,
        "name": "Monty Hall Simulator",
        "description": "Simulador do famoso problema de probabilidade conhecido como 'Monty Hall'. O simulador permite aos usuários experimentar diferentes estratégias para escolher entre três portas, onde uma delas esconde um prêmio e as outras duas estão vazias.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React", "Next.js"],
        "githubUrl": "https://github.com/R4ULz/ProjetoMontyHall",
        "demoUrl": "https://projeto-monty-hall-seven.vercel.app/"
    },
    {
         "id": 6,
        "name": "Não Pode",
        "description": "Meu projeto recem finalizado, um jogo onde o jogador precisa fazer seu time acertar uma palavra sem dizer as palavras proibidas, utilizando dicas e estratégias para vencer os desafios. O jogo é divertido e desafiador, perfeito para testar suas habilidades de comunicação e raciocínio.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React", "TypeScript", "Tailwind CSS"],
        "githubUrl": "https://github.com/R4ULz/nao-pode",
        "demoUrl": "https://nao-pode-red.vercel.app/"
    },
    {
        "id": 7,
        "name": "Descobrindo Cartas",
        "description": "Jogo onde o jogador precisa descobrir as cartas do Clash Royale através de emojis, jogo perfeito para testar seus conhecimentos sobre as cartas do jogo.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React", "Typescript", "Tailwind CSS"],
        "githubUrl": "https://github.com/R4ULz/descobrindo-cartas",
        "demoUrl": "https://descobrindo-cartas.vercel.app/"

    },
    {
        "id": 8,
        "name": "Api da Champions League",
        "description": "Api da Champions League onde o usuario pode ser realizado um crud de Jogadores e pode ser listado os clubes.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["Node.js", "Typescript", "Express"],
        "githubUrl": "https://github.com/R4ULz/api-championsleague-node-ts-express",
    },
    {
        "id": 9,
        "name": "Api de equipes e pilotos de formula 1",
        "description": "Uma Minimal API desenvolvida com Fastify e TypeScript, que fornece dados de equipes e pilotos da temporada 2025 da Fórmula 1.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["Node.js", "Typescript", "Fastify"],
        "githubUrl": "https://github.com/R4ULz/minimal-api-com-fastify-e-ts",
    },
    {
        "id": 10,
        "name": "Api Podcast Manager",
        "description": "O Podcast Manager é um aplicativo no estilo Netflix, desenvolvido para centralizar episódios de podcasts em vídeo, organizados por categorias, permitindo fácil navegação e descoberta de conteúdo.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["Node.js", "Typescript"],
        "githubUrl": "https://github.com/R4ULz/projeto-node-ts-APIRest-sem-framworks-gerenciador-podcasts",
    },
    {
        "id": 11,
        "name": "Simulador Mario Kart",
        "description": "Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["Javascript"],
        "githubUrl": "https://github.com/R4ULz/SimuladorMarioKart",
    },
     {
        "id": 12,
        "name": "App de Receitas",
        "description": "Um aplicativo de receitas culinárias, onde tem a lista de receitas e a pagina para a receita, desenvolvido como conteudo de aula",
        "images": ["https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwc2hvcHBpbmd8ZW58MXx8fHwxNzcwMDMxODI4fDA&ixlib=rb-4.1.0&q=80&w=1080"],
        "technologies": ["React Native"],
        "githubUrl": "https://github.com/R4ULz/Receitas-App-ReactNative",
    }
]