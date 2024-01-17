import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { clear } from 'console';
import LoginRegister from '../../Pages/LoginRegister';

describe('Testes da página de Login e Registro', () => {
  const inputLogin = 'login-input';
  const buttonLogin = 'login-button';
  const already = 'already-exist';
  beforeEach(() => {
    render(<LoginRegister />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    clear();
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
    const loginInput = screen.getAllByTestId(inputLogin);
    const loginButton = screen.getByTestId(buttonLogin);
    const alreadyExist = screen.getByTestId(already);

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

  test('Verificando se a tela de login acusa se não preencher os dados', () => {
    const loginButton = screen.getByTestId(buttonLogin);
    const loginInput = screen.getAllByTestId(inputLogin);

    fireEvent.click(loginButton);
    const emailAlert = screen.getByText('preencha o campo E-Mail corretamente');
    expect(emailAlert).toBeInTheDocument();

    fireEvent.change(loginInput[0], { target: { value: 'usuario.com' } });
    fireEvent.click(loginButton);
    expect(emailAlert).toBeInTheDocument();

    fireEvent.change(loginInput[0], { target: { value: 'usuario@gmail.com' } });
    fireEvent.click(loginButton);
    const passwordAlert = screen.getByText('preencha o campo password com no minimo 8 caracteres');
    expect(passwordAlert).toBeInTheDocument();

    fireEvent.change(loginInput[1], { target: { value: '123' } });
    fireEvent.click(loginButton);
    expect(passwordAlert).toBeInTheDocument();

    fireEvent.change(loginInput[1], { target: { value: '12345678' } });
    fireEvent.click(loginButton);
    expect(window.location.pathname).toBe('/');
  });

  test('Verificando se todos os elementos da tela de registro existem', () => {
    const alreadyExist = screen.getByTestId(already);
    fireEvent.click(alreadyExist);

    const loginInput = screen.getAllByTestId(inputLogin);

    expect(loginInput.length).toBe(5);
  });

  test('Verificando se todos os links para tela de login ou registro funcionam', () => {
    const notExist = screen.getByTestId(already);
    fireEvent.click(notExist);

    const registerInput = screen.getAllByTestId(inputLogin);

    expect(registerInput.length).toBe(5);

    const alreadyExist = screen.getByTestId(already);
    fireEvent.click(alreadyExist);

    const loginInput = screen.getAllByTestId(inputLogin);

    expect(loginInput.length).toBe(2);
  });

  test('Verificando se a tela de registro acusa se não preencher os dados', () => {
    const loginButton = screen.getByTestId(buttonLogin);
    const alreadyExist = screen.getByTestId(already);

    fireEvent.click(alreadyExist);
    const loginInput = screen.getAllByTestId(inputLogin);

    fireEvent.click(loginButton);
    const firstNameAlert = screen.getByText('preencha o campo firstName');
    expect(firstNameAlert).toBeInTheDocument();

    fireEvent.change(loginInput[0], { target: { value: 'Matheus' } });
    fireEvent.click(loginButton);
    const lastNameAlert = screen.getByText('preencha o campo lastName');
    expect(lastNameAlert).toBeInTheDocument();

    fireEvent.change(loginInput[1], { target: { value: 'Leão' } });
    fireEvent.click(loginButton);
    const emailAlert = screen.getByText('preencha o campo E-Mail corretamente');
    expect(emailAlert).toBeInTheDocument();

    fireEvent.change(loginInput[2], { target: { value: 'usuario.com' } });
    fireEvent.click(loginButton);
    expect(emailAlert).toBeInTheDocument();

    fireEvent.change(loginInput[2], { target: { value: 'usuario@gmail.com' } });
    fireEvent.click(loginButton);
    const passwordAlert = screen.getByText('preencha o campo password com no minimo 8 caracteres');
    expect(passwordAlert).toBeInTheDocument();

    fireEvent.change(loginInput[3], { target: { value: '123' } });
    fireEvent.click(loginButton);
    expect(passwordAlert).toBeInTheDocument();

    fireEvent.change(loginInput[3], { target: { value: '12345678' } });
    fireEvent.click(loginButton);
    const cpfAlert = screen.getByText('preencha o campo cpf corretamente');
    expect(cpfAlert).toBeInTheDocument();

    fireEvent.change(loginInput[4], { target: { value: '123456' } });
    fireEvent.click(loginButton);
    expect(cpfAlert).toBeInTheDocument();

    // Gerador de CPF: https://gerarcpf.org/
    fireEvent.change(loginInput[4], { target: { value: '79288299327' } });
    fireEvent.click(loginButton);
    expect(cpfAlert).not.toBeInTheDocument();
    expect(window.location.pathname).toBe('/');
  });
});
