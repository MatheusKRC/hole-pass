import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../../Components/01-Navbar';

describe('Testes do Componente da barra de navegação', () => {
  beforeEach(() => {
    render(<NavBar />, { wrapper: BrowserRouter });
  });

  const user = userEvent.setup();

  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };

  test('Verificando se todos os elementos da barra de navegação estão presentes', () => {
    const navBar = screen.getByTestId('nav-bar');
    const homeLink = screen.getByTestId('home-link');
    const holeLogo = screen.getByTestId('hole-logo');
    const holeTitle = screen.getByTestId('hole-title');
    const allNavLink = screen.getAllByTestId('nav-link');
    const backButton = screen.getByTestId('back-button');
    const assignButton = screen.getByTestId('assign-button');
    const userLink = screen.getByTestId('user-link');
    const userIcon = screen.getByTestId('user-icon');

    expect(navBar).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(holeLogo).toBeInTheDocument();
    expect(holeTitle).toBeInTheDocument();
    expect(allNavLink.length).toBe(4);
    expect(backButton).toBeInTheDocument();
    expect(assignButton).toBeInTheDocument();
    expect(userLink).toBeInTheDocument();
    expect(userIcon).toBeInTheDocument();
  });

  test('Verificando se os links de navegação estão funcionando corretamente', async () => {
    const homeLink = screen.getByTestId('home-link');

    waitFor(() => {
      user.click(homeLink);
      expect(window.location.pathname).toEqual('/');
    });

    const linkGames = screen.getAllByTestId('nav-link');
    waitFor(() => {
      user.click(linkGames[0]);
      expect(window.location.pathname).toEqual('/Jogos');
    });

    waitFor(() => {
      user.click(linkGames[1]);
      expect(window.location.pathname).toEqual('/Plans');
    });

    waitFor(() => {
      user.click(linkGames[2]);
      expect(window.location.pathname).toEqual('/https://www.xbox.com/pt-BR/xbox-game-pass');
    });

    waitFor(() => {
      user.click(linkGames[3]);
      expect(window.location.pathname).toEqual('https://matheus-santos-leao.netlify.app/');
    });
  });

  test('Testando o botão de inscreva-se agora', async () => {
    const assignButton = screen.getByTestId('assign-button');

    waitFor(() => {
      user.click(assignButton);
      expect(window.location.pathname).toEqual('http://localhost:5173/#plans');
    });
  });

  test('Verificando se o icone de usuário leva para tela de login', () => {
    const userIcon = screen.getByTestId('user-icon');

    waitFor(() => {
      user.click(userIcon);
      expect(window.location.pathname).toEqual('/Login');
    });
  });

  test('Verificando se o icone de usuário leva para tela de perfil', () => {
    const mockId = 'blackHoleUser';
    const mockJson = { data: { firstName: 'Matheus', lastName: 'Santos Leão', email: 'kyracraft0@gmail.com', password: 'kyarcarft12', cpf: '09639652393' } };
    setLocalStorage(mockId, mockJson);

    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));

    const userIcon = screen.getByTestId('user-icon');

    waitFor(() => {
      user.click(userIcon);
      expect(window.location.pathname).toEqual('/User');
    });
  });
});
