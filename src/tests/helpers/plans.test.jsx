import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Plans from '../../Pages/Plans';

describe('Testes da página inicial', () => {
  beforeEach(() => {
    render(<Plans />, { wrapper: BrowserRouter });
  });

  test('Verificando se todos os elementos da tela de planos existem', () => {
    const plansPage = screen.getByTestId('plans-page');
    const plansMain = screen.getByTestId('plans-main');
    const divTitle = screen.getByTestId('div-title');
    const allGamesTitle = screen.getByTestId('all-games-title');
    const plans = screen.getByTestId('plans');
    const plansContent = screen.getByTestId('plans-content');
    const home = screen.getByTestId('home');
    const passLogo = screen.getByTestId('pass-logo');
    const homeTitle = screen.getByTestId('home-title');
    const passDesc = screen.getByTestId('pass-desc');
    const plansHole = screen.getByTestId('plans-hole');
    const planHole = screen.getAllByTestId('plan-hole');
    const games = screen.getAllByTestId('games');
    const planLink = screen.getAllByTestId('plan-link');
    const buyButton = screen.getAllByTestId('buy-button');
    const carrousel = screen.getAllByTestId('carrousel');
    const motionDiv = screen.getAllByTestId('motion-div');
    const atropos = screen.getAllByTestId('atropos');
    const gameBox = screen.getAllByTestId('game-box');
    const overLogo = screen.getAllByTestId('over-logo');
    const overName = screen.getAllByTestId('over-name');

    expect(plansPage).toBeInTheDocument();
    expect(plansMain).toBeInTheDocument();
    expect(divTitle).toBeInTheDocument();
    expect(allGamesTitle).toBeInTheDocument();
    expect(plans).toBeInTheDocument();
    expect(plansContent).toBeInTheDocument();
    expect(home).toBeInTheDocument();
    expect(passLogo).toBeInTheDocument();
    expect(homeTitle).toBeInTheDocument();
    expect(passDesc).toBeInTheDocument();
    expect(plansHole).toBeInTheDocument();
    expect(planHole.length).toBe(3);
    expect(games.length).toBe(3);
    expect(planLink.length).toBe(3);
    expect(buyButton.length).toBe(3);
    expect(carrousel.length).toBe(3);
    expect(motionDiv.length).toBe(46);
    expect(atropos.length).toBe(43);
    expect(gameBox.length).toBe(43);
    expect(overLogo.length).toBe(43);
    expect(overName.length).toBe(43);
  });
});
