import  '@testing-library/jest-dom'
import { render, screen, fireEvent, userEvent } from '@testing-library/react'
import Footer from '../Components/Footer'

beforeEach(() =>{
    render(<Footer/>);
})

describe('Footer', () => {
    it('Verificacion de anchors en el footer', () => {
        const btnf = screen.getByRole("facebook")
        const btni = screen.getByRole("instagram")
        const btnw = screen.getByRole("whatsapp")
        const btnt = screen.getByRole("tiktok")

        expect(btnf.href).toBe(`https://www.facebook.com/`);
        expect(btni.href).toBe(`https://www.instagram.com/`);
        expect(btnw.href).toBe(`https://www.whatsapp.com/`);
        expect(btnt.href).toBe(`https://www.twitter.com/`);
    })
})