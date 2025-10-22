# Guidelines do Projeto

Este documento define padrões e regras para o desenvolvimento neste repositório. Siga estas diretrizes para manter consistência e qualidade no código.

## 1) Organização por Features (Feature-first)
Estruturamos o código por módulos de negócio dentro de `src/features`. Cada feature deve concentrar tudo que é específico daquele domínio.

Estrutura recomendada por feature:

```
src/
  features/
    <feature>/
      components/    # componentes da feature (cards, sections, widgets)
      modal/         # modais da feature
      schema/        # esquemas de validação (ex.: Zod)
      services/      # serviços de dados (API, cache, mapeadores)
```

Exemplos de features existentes/planejadas:
- `features/home`: seções da landing/home (HeroSection, FeaturesSection, etc.)
- `features/feed`: tudo relacionado ao feed
- `features/publish` (publicação): tudo que envolve publicar/cadastrar

Boas práticas:
- Co-loque arquivos próximos do que utilizam (co-location) dentro da própria feature.
- Nomeie arquivos de UI como `*-section.tsx`, `*-card.tsx`, `*-widget.tsx` conforme o papel.
- Nomeie validações como `*-schema.ts`, serviços como `*-service.ts`, hooks como `use*.ts`.
- Evite exportar partes internas da feature para fora sem necessidade. Exporte só o que será usado por páginas ou outras features.

## 2) Componentes compartilhados
- Componentes reutilizados por mais de uma feature devem ficar em `src/components` (escopo compartilhado).
- Exemplos: `AppLogo`, `layout/providers`, componentes de tema, wrappers genéricos.
- Evite adicionar dependência circular entre `components` e `features`.

## 3) Rotas (Next.js App Router)
- As rotas vivem em `src/app`. As páginas podem consumir componentes das features via imports.
- Não coloque lógica de domínio diretamente na pasta `app`; coloque dentro de `features/<feature>` e consuma na rota.

## 4) Imports e Aliases
- Use o alias `@/*` (configurado no tsconfig) para imports absolutos.
  - Ex.: `import { HeroSection } from '@/features/home/components/hero-section'`
  - Ex.: `import { AppLogo } from '@/components/app-logo'`

## 5) Gerenciamento de dependências e Package Manager (pnpm)
- O projeto utiliza pnpm. Comandos comuns:
  - Instalar deps: `pnpm install`
  - Rodar dev: `pnpm dev`
  - Build: `pnpm build`
  - Lint/format (se configurado): `pnpm lint` / `pnpm format`
- Antes de adicionar novas libs, verifique se já não existe solução com o que temos hoje (`@heroui/react`, `lucide-react`, utilitários internos, etc.).
- Para quaisquer novas libs, descreva a justificativa no PR e obtenha aprovação.
- A versão do Node está em `.nvmrc`. Utilize-a para manter consistência local: `nvm use`.

## 6) Biblioteca de UI
- A biblioteca oficial de componentes é: `@heroui/react`.
- Ela contém todos os componentes necessários para o projeto.
- Não é permitido instalar ou utilizar outras bibliotecas de componentes (ex.: Radix UI, shadcn/ui, etc.) sem autorização prévia do time responsável.
  - Caso realmente precise de uma exceção, abra uma issue/PR explicando o caso de uso e aguarde aprovação antes de adicionar qualquer dependência.

## 7) Animações (framer-motion)
- Quando for utilizar o framer-motion, sempre importe a partir de `motion/react`.
  - Exemplo: `import { motion } from 'motion/react'`

## 8) Ícones
- A biblioteca de ícones padrão é Lucide, via pacote `lucide-react`.
  - Exemplo de uso: `import { Search } from 'lucide-react'`
- Não adicione outras bibliotecas de ícones sem autorização.

## 9) Padrões gerais de código
- Mantenha a consistência de estilo e organização dos arquivos existentes.
- Prefira componentes e padrões já utilizados no projeto.
- Evite sobre-engenharia; opte por soluções simples e legíveis.
- Utilize utilitários compartilhados em `src/lib` quando fizer sentido.

## 10) Testes
- O projeto, no momento, não utiliza testes automatizados.
- Não crie arquivos de teste até que haja mudança oficial nesta diretriz.

## 11) Migração gradual para o padrão de features
- Ao criar novas funcionalidades, já siga a estrutura acima.
- Ao tocar em partes antigas, aproveite para movê-las para o escopo da feature (quando for de baixo impacto). Caso contrário, faça em PRs dedicados de refactor.

## 12) Dúvidas
- Em caso de dúvidas sobre estas diretrizes, abra uma issue ou inicie uma discussão no PR para alinhamento com o time.
