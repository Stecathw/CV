// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react'
import Home from '../Home'
import { BrowserRouter } from 'react-router-dom';


it("Should render homepage with -Télécharger mon CV- link", () => {
    render(<BrowserRouter><Home/></BrowserRouter>)
    const HomePageEl = screen.getByTestId('HomePage')
    expect(HomePageEl).toBeInTheDocument()
    expect(HomePageEl).toHaveTextContent('Télécharger mon CV')
    const Atag = screen.getByTestId('CV_pdf')
    expect(Atag).toHaveAttribute('href', './media/CV.pdf')
})