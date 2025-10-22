# Guidelines do Projeto

Este documento define padrões e regras para o desenvolvimento neste repositório. Siga estas diretrizes para manter consistência e qualidade no código.

## 1) Biblioteca de UI
- A biblioteca oficial de componentes é: `@heroui/react`.
- Ela contém todos os componentes necessários para o projeto.
- Não é permitido instalar ou utilizar outras bibliotecas de componentes (ex.: Radix UI, shadcn/ui, etc.) sem autorização prévia do time responsável.
  - Caso realmente precise de uma exceção, abra uma issue/PR explicando o caso de uso e aguarde aprovação antes de adicionar qualquer dependência.

## 2) Animações (framer-motion)
- Quando for utilizar o framer-motion, sempre importe a partir de `motion/react`.
  - Exemplo: `import { motion } from 'motion/react'`

## 3) Ícones
- A biblioteca de ícones padrão é Lucide, via pacote `lucide-react`.
  - Exemplo de uso: `import { Search } from 'lucide-react'`
- Não adicione outras bibliotecas de ícones sem autorização.

## 4) Testes
- O projeto, no momento, não utiliza testes automatizados.
- Não crie arquivos de teste até que haja mudança oficial nesta diretriz.

## 5) Gerenciamento de dependências
- Antes de adicionar novas dependências, verifique se já não existe solução com o que temos hoje (`@heroui/react`, `lucide-react`, utilitários internos, etc.).
- Para quaisquer novas libs, descreva a justificativa no PR e obtenha aprovação.

## 6) Padrões gerais de código
- Mantenha a consistência de estilo e organização dos arquivos existentes.
- Prefira componentes e padrões já utilizados no projeto.
- Evite sobre-engenharia; opte por soluções simples e legíveis.

## 7) Dúvidas
- Em caso de dúvidas sobre estas diretrizes, abra uma issue ou inicie uma discussão no PR para alinhamento com o time.
