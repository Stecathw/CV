// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { BrowserRouter } from 'react-router-dom';


it("Should render homepage with h1, h2, p and img", () => {
    render(<BrowserRouter><Home/></BrowserRouter>)   

    
    expect(screen.getByTestId('HomePage')).toBeInTheDocument()
    expect(screen.getByTestId('h1')).toBeInTheDocument()
    expect(screen.getByTestId('h2')).toBeInTheDocument()
    expect(screen.getByTestId('intro-text')).toBeInTheDocument()
    expect(screen.getByTestId('CV_pdf')).toBeInTheDocument()
    // expect(HomePageEl).toBeInTheDocument()
    // expect(HomePageEl).toHaveTextContent('Télécharger mon CV')
    // expect(HomePageEl).
    // const Atag = screen.getByTestId('CV_pdf')
    // expect(Atag).toHaveAttribute('href', './media/CV.pdf')

})