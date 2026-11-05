import React from "react";
import { ArrowUpRight, Check } from "./Icons.jsx";
import image_clara from "../assets/clara.webp";

const ConceptImage = ({ name: e, alt: t, className: n = `` }) => (
  <img className={n} src={image_clara} alt={t} width={`1200`} height={`900`} />
);
function DemoNavigation({ brand: e, children: t }) {
  return (
    <div className={`dm-nav`}>
      <a className={`dm-brand`} href={`#demo-top`}>
        {e}
      </a>
      <nav aria-label={`Navegação do modelo ` + e}>{t}</nav>
    </div>
  );
}
function ClaraDemo() {
  let [specialty, setSpecialty] = React.useState(`Clínica geral`),
    [selectedTime, setSelectedTime] = React.useState(``);
  return (
    <div className={`dm-clara`} id={`demo-top`}>
      <DemoNavigation brand={`clara ✳`}>
        <a href={`#clara-care`}>Nosso cuidado</a>
        <a href={`#clara-agenda`} className={`dm-pill`}>
          {`Encontrar horário `}
          <ArrowUpRight size={15} />
        </a>
      </DemoNavigation>
      <section className={`cl-hero`}>
        <div className={`cl-hero-copy`}>
          <p className={`dm-overline`}>CUIDADO QUE CABE NA SUA VIDA</p>
          <h1>
            Mais presença.
            <br />
            Mais cuidado.
            <br />
            <em>Mais você.</em>
          </h1>
          <p>
            Um espaço para ser ouvido, encontrar orientação e cuidar do que
            realmente importa.
          </p>
          <a href={`#clara-agenda`} className={`dm-button`}>
            {`Explore o agendamento `}
            <ArrowUpRight size={19} />
          </a>
          <div className={`cl-values`}>
            <span>Escuta atenta</span>
            <i />
            <span>Uma jornada simples</span>
          </div>
        </div>
        <div className={`cl-photo`}>
          <ConceptImage
            name={`clara`}
            alt={`Ambiente sereno e acolhedor para o conceito de saúde Clara`}
          />
          <span className={`cl-star`} aria-hidden={`true`}>
            ✳
          </span>
          <div className={`cl-photo-note`}>
            <span>Um tempo para você.</span>
            <small>CONCEITO DE EXPERIÊNCIA</small>
          </div>
        </div>
      </section>
      <section className={`cl-care`} id={`clara-care`}>
        <p className={`dm-overline`}>DE PESSOA PARA PESSOA</p>
        <h2>
          O cuidado começa
          <br />
          antes da consulta.
        </h2>
        <div>
          {[
            [
              `01`,
              `Encontre seu caminho`,
              `Especialidades organizadas para facilitar a escolha, sem complicar.`,
            ],
            [
              `02`,
              `Escolha seu momento`,
              `Uma visão clara de dias e horários em uma jornada acolhedora.`,
            ],
            [
              `03`,
              `Saiba o próximo passo`,
              `Informações objetivas e uma confirmação fácil de entender.`,
            ],
          ].map(([e, t, n]) => (
            <article key={e}>
              <span>{e}</span>
              <h3>{t}</h3>
              <p>{n}</p>
            </article>
          ))}
        </div>
      </section>
      <section className={`cl-appointment`} id={`clara-agenda`}>
        <div>
          <span className={`cl-symbol`}>✳</span>
          <p className={`dm-overline`}>EXPERIMENTE A JORNADA</p>
          <h2>
            Vamos encontrar
            <br />
            um bom momento?
          </h2>
          <p>
            Agenda fictícia para explorar a interface.
            <br />
            Nenhuma consulta será agendada.
          </p>
        </div>
        <div className={`cl-booking`}>
          <label>
            Qual cuidado você procura?
            <select
              value={specialty}
              onChange={(e) => {
                (setSpecialty(e.target.value), setSelectedTime(``));
              }}
            >
              {[`Clínica geral`, `Nutrição`, `Psicologia`].map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>
          </label>
          <div className={`cl-doctor`}>
            <span>✳</span>
            <div>
              <strong>
                {`Equipe `}
                {specialty}
              </strong>
              <small>Perfil fictício · atendimento presencial</small>
            </div>
          </div>
          <p>QUARTA-FEIRA · DIA ILUSTRATIVO</p>
          <div className={`cl-times`}>
            {[`09:00`, `10:30`, `14:00`, `16:30`].map((e) => (
              <button
                key={e}
                aria-pressed={selectedTime === e}
                onClick={() => setSelectedTime(e)}
              >
                {e}
              </button>
            ))}
          </div>
          <div role={`status`} className={`dm-feedback`}>
            {selectedTime ? (
              <React.Fragment>
                <Check size={18} />
                {` Horário de exemplo selecionado: `}
                {selectedTime}. Nenhuma reserva foi realizada.
              </React.Fragment>
            ) : (
              `Selecione um horário para visualizar o próximo passo.`
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ClaraDemo;
