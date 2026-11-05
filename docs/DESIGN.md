---
name: "Clara"
description: "Sistema visual implementado — Saúde & bem-estar"
colors:
  primary: "#163b30"
  accent: "#60826d"
  background: "#f5f2e8"
  text: "#203f34"
  surface: "#e6ecdd"
  card: "#fbfbf6"
  selected: "#34513b"
  frame-background: "#09090b"
  frame-text: "#f5f5f7"
  focus: "#ff2d60"
typography:
  display:
    fontFamily: "Georgia, serif"
    fontSize: "clamp(48px, 5.7vw, 79px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-3px"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
---

# Design System: Clara

## Overview

Composição acolhedora com fundo creme, verdes suaves e títulos serifados. A fotografia em arco e os símbolos florais conduzem a apresentação de cuidado e a agenda demonstrativa.

Registro descritivo do código atual, com autoridade de preservação da [referência pública](https://lofranotecnologia.com.br/modelos/clara). Fontes normativas: [estilos do modelo](../src/demo.css), [base compartilhada](../src/base.css), [componentes da demonstração](../src/Demo.jsx) e [moldura de distribuição](../src/App.jsx). Layout, contraste e overflow visual permanecem não verificados em navegador; valores abaixo são declarações de fonte, não medições de renderização.

## Colors

O verde profundo sustenta a ação principal; o acento suaviza a ênfase em itálico. A agenda combina uma seção verde clara com cartão quase branco e horários selecionados em verde escuro. O frontmatter registra cores principais por papel; variações locais permanecem no CSS. A moldura LOFRANO conserva fundo escuro, texto claro e foco rosa. Paleta fixa, sem alternância de tema.

## Typography

Georgia organiza títulos e destaques; DM Sans sustenta navegação, textos e controles. O título principal muda para (58px) até (760px). Manrope e DM Sans são fontes locais de [`assets/`](../assets/); Georgia, Arial e Helvetica dependem das alternativas do sistema. O token display descreve o título principal em desktop. A base define h2 móvel (34px), com espaçamento de letras (-1.3px), até (760px); regras mais específicas do modelo prevalecem.

## Layout

Hero e agenda em duas colunas; cuidados em três. Margens laterais variam entre (6%) e (8%). Até (1050px), diminuem lacunas e altura mínima da foto. Até (760px), as três áreas passam a uma coluna; o seletor usa (16px), e a foto tem altura declarada de (410px).

A moldura organiza autoria e links acima da demonstração, guia abaixo e rodapé final. Cabeçalho e rodapé permitem quebra; até (600px), o guia reduz o padding para (40px 20px).

## Elevation & Depth

A nota sobreposta à foto usa sombra (0 8px 30px #172e1714). O restante depende de fundos e bordas finas.

## Shapes

Foto com arco superior (180px 180px 16px 16px), reduzido no móvel; ação em pílula (30px), cartão da agenda (12px) e horários (4px). A imagem conceitual está em [`assets/clara.webp`](../assets/clara.webp); preservar seu recorte definido pelo CSS.

## Components

- Agenda: especialidade selecionável e quatro horários; mudar a especialidade limpa o horário.
- Horário: `aria-pressed` aplica fundo verde e texto branco; o status inicia com instrução e muda para seleção de exemplo.
- Navegação: âncoras levam aos cuidados e à agenda; a ação de navegação tem borda em pílula.
- Estados compartilhados: Controles da demonstração usam o foco global rosa (3px), afastado (5px). A moldura inverte o botão de reinício para fundo branco no hover. As interações do modelo usam os estados descritos acima; não há variante de hover adicional declarada para elas. Reiniciar remonta a demonstração e restaura o estado local.
- Movimento: a base usa rolagem suave; a preferência por movimento reduzido troca a rolagem CSS para automática e reduz durações de animação/transição para (0.01ms).

## Do's and Don'ts

- **Do:** Preservar arco da fotografia, espaços generosos e contraste de serifas com controles simples.
- **Do:** manter avisos de conceito fictício, foco visível e estados de seleção coerentes com os controles.
- **Don't:** Apresentar o status como consulta confirmada ou substituir a paleta por cores clínicas genéricas.
- **Don't:** interpretar a moldura compartilhada como autorização para substituir a identidade visual do modelo.
