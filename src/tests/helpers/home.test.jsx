import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { clear } from 'console';
import Home from '../../Pages/Home';

describe('Testes da página inicial', () => {
  const planButon = 'buy-button';
  beforeEach(() => {
    render(<Home />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    clear();
  });

  test('Verificando se todos os elementos da primeira parte existem', () => {
    const firstPage = screen.getByTestId('first-page');
    const mainContent = screen.getByTestId('main-content');
    const homeGamesBoxs = screen.getByTestId('home-games-boxs');
    const homeGamesBox = screen.getAllByTestId('home-games-box');
    const content = screen.getByTestId('content');
    const home = screen.getByTestId('home');
    const passLogo = screen.getByTestId('pass-logo');
    const homeTitle = screen.getByTestId('home-title');
    const passDesc = screen.getByTestId('pass-desc');
    const homeGames = screen.getByTestId('home-games');
    const homeGame = screen.getAllByTestId('home-game');

    expect(firstPage).toBeInTheDocument();
    expect(mainContent).toBeInTheDocument();
    expect(homeGamesBoxs).toBeInTheDocument();
    expect(homeGamesBox.length).toBe(6);
    expect(content).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(passLogo).toBeInTheDocument();
    expect(passDesc).toBeInTheDocument();
    expect(homeTitle).toBeInTheDocument();
    expect(homeGames).toBeInTheDocument();
    expect(homeGame.length).toBe(3);
  });

  test('Verificando se todos os elementos da segunda parte existem', () => {
    const secondPage = screen.getByTestId('second-page');
    const future = screen.getByTestId('future');
    const futureTitle = screen.getByTestId('future-title');
    const portal = screen.getByTestId('portal');
    const benefits = screen.getByTestId('benefits');
    const benefitsIcon = screen.getAllByTestId('benefits-icon');
    const benefitsDesc = screen.getAllByTestId('benefits-desc');

    expect(secondPage).toBeInTheDocument();
    expect(future).toBeInTheDocument();
    expect(futureTitle).toBeInTheDocument();
    expect(portal).toBeInTheDocument();
    expect(benefits).toBeInTheDocument();
    expect(benefitsIcon.length).toBe(3);
    expect(benefitsDesc.length).toBe(3);
  });

  test('Verificando se todos os elementos da terceira parte existem', () => {
    const thirdPage = screen.getByTestId('third-page');
    const classicsTitle = screen.getByTestId('classics-title');
    const classicGames = screen.getByTestId('classic-games');
    const classicGamesBack = screen.getByTestId('classic-games-back');
    const classicGamesContent = screen.getByTestId('classic-games-content');
    const classicDesc = screen.getByTestId('classic-desc');
    const classicGamesImage = screen.getByTestId('classic-games-image');
    const classicCharacter = screen.getByTestId('classic-character');
    const classicName = screen.getByTestId('classic-name');
    const classicsLinks = screen.getByTestId('classics-links');
    const classicsButton = screen.getAllByTestId('classics-button');

    expect(thirdPage).toBeInTheDocument();
    expect(classicsTitle).toBeInTheDocument();
    expect(classicGames).toBeInTheDocument();
    expect(classicGamesBack).toBeInTheDocument();
    expect(classicGamesContent).toBeInTheDocument();
    expect(classicDesc).toBeInTheDocument();
    expect(classicGamesImage).toBeInTheDocument();
    expect(classicCharacter).toBeInTheDocument();
    expect(classicName).toBeInTheDocument();
    expect(classicsLinks).toBeInTheDocument();
    expect(classicsButton.length).toBe(3);
  });

  test('Verificando de o slider de jogos clássicos funciona corretamente', () => {
    const classicsButton = screen.getAllByTestId('classics-button');

    fireEvent.click(classicsButton[1]);
    const castlevania = screen.getByAltText('castlevania symphony of the night');
    expect(classicsButton[1].className).toBe('buttonGamecastle');
    expect(castlevania).toBeInTheDocument();

    fireEvent.click(classicsButton[2]);
    const darkSouls = screen.getByAltText('dark souls');
    expect(classicsButton[2].className).toBe('buttonGameds');
    expect(darkSouls).toBeInTheDocument();

    fireEvent.click(classicsButton[0]);
    const residentEvil4 = screen.getByAltText('resident evil 4');
    expect(classicsButton[0].className).toBe('buttonGamere4');
    expect(residentEvil4).toBeInTheDocument();
  });

  test('Verificando se todos os elementos da quarta parte existem', () => {
    const comparePlans = screen.getByTestId('compare-plans');
    const plansTitle = screen.getByTestId('plans-title');
    const plansBlackHole = screen.getByTestId('plans-black-hole');
    const planCards = screen.getByTestId('plan-cards');
    const planCard = screen.getAllByTestId('plan-card');
    const benefitName = screen.getAllByTestId('benefit-name');
    const benefitsList = screen.getAllByTestId('benefits-list');
    const buyButton = screen.getAllByTestId(planButon);
    const bigBlackHole = screen.getByTestId('big-black-hole');

    expect(comparePlans).toBeInTheDocument();
    expect(plansTitle).toBeInTheDocument();
    expect(plansBlackHole).toBeInTheDocument();
    expect(planCards).toBeInTheDocument();
    expect(planCard.length).toBe(3);
    expect(benefitName.length).toBe(3);
    expect(benefitsList.length).toBe(17);
    expect(buyButton.length).toBe(3);
    expect(bigBlackHole).toBeInTheDocument();
  });

  test('Verificando se quando não existe localStorage o botão do plano de assinatura leva para a tela de login', () => {
    const buyButton = screen.getAllByTestId(planButon);

    fireEvent.click(buyButton[0]);
    expect(window.location.pathname).toBe('/Login');
  });

  test('Verificando se quando existe localStorage o botão do plano de assinatura leva para a tela de pagamento', () => {
    const mockId = 'blackHoleUser';
    const mockJson = { firstName: 'Matheus', lastName: 'Santos Leão', email: 'usuário@gmail.com', password: 'usuario123', cpf: '00000000000' };
    localStorage.setItem(mockId, JSON.stringify(mockJson));
    const buyButton = screen.getAllByTestId(planButon);

    fireEvent.click(buyButton[0]);
    expect(window.location.pathname).toBe('/Payment');
  });
});
