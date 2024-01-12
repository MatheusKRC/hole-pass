import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../../Components/08-Footer';

describe('Testes do rodapé', () => {
  beforeEach(() => {
    render(<Footer />, { wrapper: BrowserRouter });
  });

  test('Verificando se todos os elementos do rodapé existem', () => {
    const footer = screen.getByTestId('footer');
    const footerDiv = screen.getByTestId('footer-div');
    const footerHoleLogo = screen.getByTestId('footer-hole-logo');
    const footerTitle = screen.getByTestId('footer-title');
    const footerDesc = screen.getByTestId('footer-desc');
    const footerDivLogo = screen.getByTestId('footer-div-logo');
    const footerLogo = screen.getByTestId('footer-logo');
    const BIE = screen.getByTestId('bie');
    const socialMedias = screen.getByTestId('social-medias');
    const socialTitle = screen.getAllByTestId('social-title');
    const socialIcon = screen.getAllByTestId('social-icon');

    expect(footer).toBeInTheDocument();
    expect(footerDiv).toBeInTheDocument();
    expect(footerHoleLogo).toBeInTheDocument();
    expect(footerTitle).toBeInTheDocument();
    expect(footerDesc).toBeInTheDocument();
    expect(footerDivLogo).toBeInTheDocument();
    expect(footerLogo).toBeInTheDocument();
    expect(BIE).toBeInTheDocument();
    expect(socialMedias).toBeInTheDocument();
    expect(socialTitle.length).toBe(2);
    expect(socialIcon.length).toBe(4);
  });
});
