import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginRegister from '../../Pages/LoginRegister';

describe('Testes da página de Login e Registro', () => {
  beforeEach(() => {
    render(<LoginRegister />, { wrapper: BrowserRouter });
  });

  test('Verificando se todos os elementos da tela de login e registro existem', () => {
    const loginPage = screen.getByTestId('login-page');
    const loginContent = screen.getByTestId('login-content');
    const loginLogo = screen.getByTestId('login-logo');
    const loginTitle = screen.getByTestId('login-title');
    const loginDesc = screen.getByTestId('login-desc');
    const loginForm = screen.getByTestId('login-form');
    const loginHoleLogo = screen.getByTestId('login-hole-logo');
    const loginRegTitle = screen.getByTestId('login-reg-title');
    const placeholder = screen.getAllByTestId('placeholder');
    const loginInput = screen.getAllByTestId('login-input');
    const loginButton = screen.getByTestId('login-button');
    const alreadyExist = screen.getByTestId('already-exist');

    expect(loginPage).toBeInTheDocument();
    expect(loginContent).toBeInTheDocument();
    expect(loginLogo).toBeInTheDocument();
    expect(loginTitle).toBeInTheDocument();
    expect(loginDesc).toBeInTheDocument();
    expect(loginForm).toBeInTheDocument();
    expect(loginHoleLogo).toBeInTheDocument();
    expect(loginRegTitle).toBeInTheDocument();
    expect(placeholder.length).toBe(2);
    expect(loginInput.length).toBe(2);
    expect(loginButton).toBeInTheDocument();
    expect(alreadyExist).toBeInTheDocument();
  });
});
