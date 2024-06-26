import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { clear } from 'console';
import User from '../../Pages/User';

describe('Testes da página de Usuário', () => {
  const buttonUser = 'user-button';
  beforeEach(() => {
    const mockId = 'blackHoleUser';
    const mockJson = { firstName: 'Matheus', lastName: 'Leão', email: 'usuário@gmail.com', password: 'usuario123', cpf: '79288299327' };
    localStorage.setItem(mockId, JSON.stringify(mockJson));
    render(<User />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    localStorage.clear();
    clear();
  });

  test('Verificando se todos os elementos da tela de usuário existem', () => {
    const userMain = screen.getByTestId('user-main');
    const userPage = screen.getByTestId('user-page');
    const user = screen.getByTestId('user');
    const userImage = screen.getByTestId('user-image');
    const infos = screen.getByTestId('infos');
    const userInfo = screen.getAllByTestId('user-info');
    const username = screen.getByTestId('username');
    const userName = screen.getByTestId('user-name');
    const userButton = screen.getAllByTestId(buttonUser);
    const assignPlan = screen.getByTestId('assign-plan');
    const userTitle = screen.getByTestId('user-title');
    const games = screen.getAllByTestId('games');
    const carrousel = screen.getAllByTestId('carrousel');
    const motionDiv = screen.getAllByTestId('motion-div');
    const atropos = screen.getAllByTestId('atropos');
    const gameBox = screen.getAllByTestId('game-box');
    const overLogo = screen.getAllByTestId('over-logo');
    const overName = screen.getAllByTestId('over-name');
    const changePlan = screen.getByTestId('change-plan');

    expect(userMain).toBeInTheDocument();
    expect(userPage).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(userImage).toBeInTheDocument();
    expect(infos).toBeInTheDocument();
    expect(userInfo.length).toBe(2);
    expect(username).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(userButton.length).toBe(2);
    expect(assignPlan).toBeInTheDocument();
    expect(userTitle).toBeInTheDocument();
    expect(games.length).toBe(1);
    expect(carrousel.length).toBe(1);
    expect(motionDiv.length).toBe(6);
    expect(atropos.length).toBe(5);
    expect(gameBox.length).toBe(5);
    expect(overLogo.length).toBe(5);
    expect(overName.length).toBe(5);
    expect(changePlan).toBeInTheDocument();
  });

  test('Verificando se é possivel inserir o username', () => {
    const userButton = screen.getAllByTestId(buttonUser);
    fireEvent.click(userButton[0]);

    const username = screen.getByTestId('username');
    fireEvent.change(username, { target: { value: 'MatheusKRC' } });
    fireEvent.click(userButton[0]);

    const user = screen.getByTestId('username');
    expect(user.value).toBe('MatheusKRC');
  });

  test('Verificando se é possivel sair da conta', async () => {
    expect(localStorage.length).toBe(1);
    const userButton = screen.getAllByTestId(buttonUser);

    await waitFor(() => {
      fireEvent.click(userButton[1]);

      expect(window.location.pathname).toBe('/');
      expect(localStorage.length).toBe(0);
    });
  });
});
