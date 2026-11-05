const text = (element) => element.textContent.replace(/\s+/gu, " ").trim();

export default [
  {
    name: "clara-01 — abre a seção de agendamento demonstrativo",
    run: async ({ ui, user, root, assert, within }) => {
      const link = ui.getByRole("link", { name: "Explore o agendamento" });
      await user.click(link);
      assert.equal(link.getAttribute("href"), "#clara-agenda");
      const agenda = root.querySelector("#clara-agenda");
      assert.ok(agenda);
      assert.ok(
        within(agenda).getByRole("combobox", {
          name: "Qual cuidado você procura?",
        }),
      );
      for (const hour of ["09:00", "10:30", "14:00", "16:30"]) {
        assert.ok(
          within(agenda).getByRole("button", { name: hour, exact: true }),
        );
      }
    },
  },
  {
    name: "clara-02 — escolhe Nutrição e um horário fictício",
    run: async ({ ui, user, assert }) => {
      await user.selectOptions(
        ui.getByRole("combobox", { name: "Qual cuidado você procura?" }),
        "Nutrição",
      );
      assert.ok(ui.getByText("Equipe Nutrição", { exact: true }));
      await user.click(ui.getByRole("button", { name: "10:30", exact: true }));
      assert.equal(
        ui
          .getByRole("button", { name: "10:30", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      assert.equal(
        text(ui.getByRole("status")),
        "Horário de exemplo selecionado: 10:30. Nenhuma reserva foi realizada.",
      );
    },
  },
  {
    name: "clara-03 — limpa o horário ao mudar de especialidade",
    run: async ({ ui, user, assert }) => {
      await user.click(ui.getByRole("button", { name: "10:30", exact: true }));
      await user.selectOptions(
        ui.getByRole("combobox", { name: "Qual cuidado você procura?" }),
        "Psicologia",
      );
      assert.ok(ui.getByText("Equipe Psicologia", { exact: true }));
      for (const hour of ["09:00", "10:30", "14:00", "16:30"]) {
        assert.equal(
          ui
            .getByRole("button", { name: hour, exact: true })
            .getAttribute("aria-pressed"),
          "false",
        );
      }
      assert.equal(
        text(ui.getByRole("status")),
        "Selecione um horário para visualizar o próximo passo.",
      );
    },
  },
];
