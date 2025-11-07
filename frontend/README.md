# Alexandre Pet Care - Frontend

Um pet shop completo dedicado ao bem-estar e cuidado dos animais de estimação.

## Tecnologias

- React 18.3.1
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router DOM 6.26.2
- TanStack Query 5.59.20
- Axios 1.7.7
- React Hook Form 7.53.1
- Zod 3.23.8

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e lógica compartilhada
│   ├── components/       # Componentes genéricos
│   ├── constants/        # Constantes globais
│   ├── lib/             # Configurações de bibliotecas
│   ├── types/           # Tipos TypeScript globais
│   └── utils/           # Funções utilitárias
├── domain/               # Domínios de negócio (a serem implementados)
└── pages/                # Páginas da aplicação
    ├── layouts/         # Layouts compartilhados
    ├── Home/           # Página inicial
    └── NotFound/       # Página 404
```

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:3001`

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Funcionalidades Planejadas

- Cadastro de Clientes e Pets
- Agendamento de Serviços
- Gestão de Estoque
- Controle de Vendas
- Gestão Financeira
- Histórico Médico e de Serviços
- Sistema de Fidelidade
- Notificações Automáticas

## Padrões de Código

- Componentes em PascalCase
- Hooks em camelCase com prefixo `use`
- Arquivos de tipos em `types.ts`
- Arquivos de variantes em `variants.ts`
- Exports centralizados em `index.ts`
- JSDoc para documentação

## Integração com Backend

O frontend está configurado para se comunicar com o backend através de dois clientes HTTP:

- `publicClient`: Para endpoints públicos (`/api/v1/external`)
- `authenticatedClient`: Para endpoints autenticados (`/api/v1/internal`)

## Licença

Private