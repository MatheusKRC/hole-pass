import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { clear } from 'console';
import Payment from '../../Pages/Payment';

describe('Testes da página de Pagamento', () => {
  beforeEach(() => {
    const mockId = 'blackHoleUser';
    const mockJson = { firstName: 'Matheus', lastName: 'Santos Leão', email: 'usuário@gmail.com', password: 'usuario123', cpf: '00000000000', username: 'MatheusKRC', planImage: '/src/Images/Estelar.png', planName: 'estelar', plan: '/src/Assets/Estelar.png', planValue: 'R$39,99', benefits: [['Jogos Mensais'], ['Descontos exclusivos'], ['Conteúdo exclusivo'], ['Armazenamento em nuvem'], ['Biblioteca de 2013 à 2017']] };
    localStorage.setItem(mockId, JSON.stringify(mockJson));
    render(<Payment />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    localStorage.clear();
    clear();
  });

  test('Verificando se todos os elementos da tela de pagamento existem', () => {
    const paymentPage = screen.getByTestId('payment-page');
    const payment = screen.getByTestId('payment');
    const paymentComponent = screen.getByTestId('payment-component');
    const paymentTitle = screen.getByTestId('payment-title');
    const paymentDiv = screen.getByTestId('payment-div');
    const paymentMethod = screen.getAllByTestId('payment-method');
    const pix = screen.getByTestId('pix');
    const pixImage = screen.getByTestId('pix-image');
    const pixInput = screen.getByTestId('pix-input');
    const someGames = screen.getByTestId('some-games');
    const someGamesDiv = screen.getByTestId('some-games-div');
    const someGamesImg = screen.getAllByTestId('some-games-imgs');
    const seeMore = screen.getByTestId('see-more');
    const paymentCard = screen.getByTestId('payment-card');

    expect(paymentPage).toBeInTheDocument();
    expect(payment).toBeInTheDocument();
    expect(paymentComponent).toBeInTheDocument();
    expect(paymentTitle).toBeInTheDocument();
    expect(paymentDiv).toBeInTheDocument();
    expect(paymentMethod.length).toBe(2);
    expect(pix).toBeInTheDocument();
    expect(pixImage).toBeInTheDocument();
    expect(pixInput).toBeInTheDocument();
    expect(someGames).toBeInTheDocument();
    expect(someGamesDiv).toBeInTheDocument();
    expect(someGamesImg.length).toBe(4);
    expect(seeMore).toBeInTheDocument();
    expect(paymentCard).toBeInTheDocument();
  });
});
