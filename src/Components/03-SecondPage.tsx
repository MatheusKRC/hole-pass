import starWars from '../Images/Design sem nome (4).png';
import cloud from '../Assets/cloud.png';
import calendar from '../Assets/calendar-minus.png';
import logo from '../Assets/hole pass 4.png';
import future from '../Assets/Future.png';

function SecondPage() {
  return (
    <div className="secondPage">
      <h1 className="titlePage">PRESENCIE EVENTOS FUTUROS ANTECIPADAMENTE</h1>

      <img className="portal" src={ future } alt="Portal para the elder scrolls VI" />

      <img
        className="futureGame"
        src={ starWars }
        alt="Imagem do jogo star wars outlaws"
      />

      <section className="benefits">
        <img className="benefitsIcon" src={ cloud } alt="Icone de uma nuvem amarela" />
        <p className="benefitsDesc">Armazenamento em nuvem </p>

        <img className="benefitsIcon" src={ calendar } alt="Icone de um calendário" />
        <p
          className="benefitsDesc"
        >
          Biblioteca de jogos baseadas em suas épocas de lançamento

        </p>

        <img className="benefitsIcon" src={ logo } alt="Icone de um buraco negro" />
        <p className="benefitsDesc">
          Novos jogos adicionados regularmente, desde antigos lançamentos,
          atuais e acesso antecipado aos futuros

        </p>
      </section>
    </div>
  );
}

export default SecondPage;
