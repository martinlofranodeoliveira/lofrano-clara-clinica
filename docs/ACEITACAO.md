# Critérios do modelo Clara

Derivados da demonstração pública antes da implementação independente. Os testes verificam DOM simulado; isso não equivale a QA visual em navegador.

- **clara-01** — Acionar o link “Explore o agendamento”.
  Resultado: O link aponta para #clara-agenda, seção da agenda fictícia. A seção contém o select de especialidade e quatro buttons de horário.
- **clara-02** — No select “Qual cuidado você procura?”, escolher Nutrição e clicar no button “10:30”.
  Resultado: O perfil passa a Equipe Nutrição. O button 10:30 recebe aria-pressed=true e role=status informa “Horário de exemplo selecionado: 10:30. Nenhuma reserva foi realizada.”.
- **clara-03** — Depois de selecionar um horário, mudar a especialidade para Psicologia.
  Resultado: O perfil passa a Equipe Psicologia; todos os horários voltam a aria-pressed=false e o status volta a “Selecione um horário para visualizar o próximo passo.”.

Além dos fluxos, a suíte confere conteúdo inicial publicado, controles, imagens, âncoras, ausência de configuração privada e reinício do estado.
