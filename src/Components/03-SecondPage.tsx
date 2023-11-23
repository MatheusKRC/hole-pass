import starWars from '../Images/Design sem nome (4).png';
import cloud from '../Assets/cloud.png';
import calendar from '../Assets/calendar-minus.png';
import logo from '../Assets/hole pass 4.png';
import future from '../Assets/Future.png';

function SecondPage() {
  return (
    <div>
      <h1>PRESENCIE EVENTOS FUTUROS ANTECIPADAMENTE</h1>

      <img width="400px" src={ future } alt="Portal para the elder scrolls VI" />

      <img src={ starWars } alt="Imagem do jogo star wars outlaws" />

      <section>
        <img src={ cloud } alt="Icone de uma nuvem amarela" />
        <p>Armazenamento em nuvem </p>

        <img src={ calendar } alt="Icone de um calendário" />
        <p>Biblioteca de jogos baseadas em suas épocas de lançamento</p>

        <img src={ logo } alt="Icone de um buraco negro" />
        <p>
          Novos jogos adicionados regularmente, desde antigos lançamentos,
          atuais e acesso antecipado aos futuros

        </p>
      </section>
    </div>
  );
}

export default SecondPage;
