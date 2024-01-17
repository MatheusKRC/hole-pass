import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { clear } from 'console';
import Games from '../../Pages/Games';

describe('Testes da página de Jogos', () => {
  beforeEach(() => {
    render(<Games />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    clear();
  });

  test('Verificando se todos os elementos da tela de jogos existem', () => {
    const gamesPage = screen.getByTestId('games-page');
    const gamesPageTitle = screen.getByTestId('games-page-title');
    const slider = screen.getByTestId('slider');
    const slides = screen.getByTestId('slides');
    const radioButtons = screen.getAllByTestId('radio-buttons');
    const newGames = screen.getAllByTestId('new-games');
    const sliderBackground = screen.getAllByTestId('slider-background');
    const navAuto = screen.getAllByTestId('nav-auto');
    const navAutoButtons = screen.getAllByTestId('nav-auto-btn');
    const navManual = screen.getAllByTestId('nav-manual');
    const navManualButtons = screen.getAllByTestId('nav-manual-btn');
    const allGames = screen.getByTestId('all-games');
    const allGamesTitle = screen.getByTestId('all-games-title');
    const search = screen.getByTestId('search');
    const gamesComponent = screen.getByTestId('games-component');
    const linkToGame = screen.getAllByTestId('link-to-game');
    const atroposGame = screen.getAllByTestId('atropos-game');
    const gameBox = screen.getAllByTestId('game-box');
    const overLogo = screen.getAllByTestId('over-logo');
    const overTitle = screen.getAllByTestId('over-title');

    expect(gamesPage).toBeInTheDocument();
    expect(gamesPageTitle).toBeInTheDocument();
    expect(slider).toBeInTheDocument();
    expect(slides).toBeInTheDocument();
    expect(radioButtons.length).toBe(3);
    expect(newGames.length).toBe(3);
    expect(sliderBackground.length).toBe(3);
    expect(navAuto.length).toBe(1);
    expect(navAutoButtons.length).toBe(3);
    expect(navManual.length).toBe(1);
    expect(navManualButtons.length).toBe(3);
    expect(allGames).toBeInTheDocument();
    expect(allGamesTitle).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(gamesComponent).toBeInTheDocument();
    expect(linkToGame.length).toBe(43);
    expect(atroposGame.length).toBe(43);
    expect(gameBox.length).toBe(43);
    expect(overLogo.length).toBe(43);
    expect(overTitle.length).toBe(43);
  });

  test('Verificando se a barra de busca por jogos funciona corretamente', async () => {
    const search = screen.getByTestId('search');

    fireEvent.change(search, { target: { value: 'spider' } });
    const linkToGame = screen.getAllByTestId('link-to-game');
    expect(search.value).toBe('spider');
    expect(linkToGame.length).toBe(3);
  });
});
