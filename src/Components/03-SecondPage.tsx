import cloud from '../Assets/cloud.webp';
import calendar from '../Assets/calendar-minus.webp';
import logo from '../Assets/hole pass 4.webp';
import future from '../Assets/Future.webp';

function SecondPage() {
  return (
    <div className="secondPage" data-testid="second-page">
      <div className="future" data-testid="future">
        <h1
          data-testid="future-title"
          className="titlePage"
        >
          PRESENCIE EVENTOS FUTUROS ANTECIPADAMENTE

        </h1>

        <img
          data-testid="portal"
          className="portal"
          src={ future }
          alt="Portal para the elder scrolls VI"
        />

      </div>

      <section data-testid="benefits" className="benefits">
        <img
          data-testid="benefits-icon"
          className="benefitsIcon"
          src={ cloud }
          alt="Icone de uma nuvem amarela"
        />
        <p
          data-testid="benefits-desc"
          className="benefitsDesc"
        >
          Armazenamento em nuvem
          {' '}

        </p>

        <img
          data-testid="benefits-icon"
          className="benefitsIcon"
          src={ calendar }
          alt="Icone de um calendário"
        />
        <p
          data-testid="benefits-desc"
          className="benefitsDesc"
        >
          Biblioteca de jogos baseadas em suas épocas de lançamento

        </p>

        <img
          data-testid="benefits-icon"
          className="benefitsIconB"
          src={ logo }
          alt="Icone de um buraco negro"
        />
        <p
          data-testid="benefits-desc"
          className="benefitsDesc"
        >
          Novos jogos adicionados regularmente, desde antigos lançamentos,
          atuais e acesso antecipado aos futuros

        </p>
      </section>
    </div>
  );
}

export default SecondPage;
