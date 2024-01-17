import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../../Components/01-Navbar';

describe('Testes do Componente da barra de navegação', () => {
  test('Verificando se todos os elementos da barra de navegação estão presentes', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
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

  test('Verificando se o icone de usuário muda dependendo da existência do local storage', () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const userIcon = screen.getByTestId('user-icon');
    expect(userIcon.className).toBe('defaultUser');
  });

  test('Verificando se o icone de usuário muda dependendo da existência do local storage', () => {
    const mockId = 'blackHoleUser';
    const mockJson = { firstName: 'Matheus', lastName: 'Santos Leão', email: 'usuário@gmail.com', password: 'usuario123', cpf: '00000000000' };
    localStorage.setItem(mockId, JSON.stringify(mockJson));
    render(<NavBar />, { wrapper: BrowserRouter });

    const userIcon = screen.getByTestId('user-icon');
    expect(userIcon.className).toBe('userIcon');
  });
});
