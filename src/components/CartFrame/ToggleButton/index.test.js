import {render, screen} from '@testing-library/react'
import ToggleButton from '.'


describe('ToggleButton', ()=>{

    const mockSetIsOpen = jest.fn();
    
    it("should render <<Fermer>> on the button when the state is set to false", () => {
        render(<ToggleButton isOpen={true} setIsOpen={mockSetIsOpen} />)
        const toggleButton = screen.getByTestId("toggle-button")  
        expect(toggleButton.textContent).toBe("Fermer")
    })


    it("should render <<Ouvrir le panier>> on the button when the state is set to true", () => {
        render(<ToggleButton isOpen={false} setIsOpen={mockSetIsOpen} />)
        const toggleButton = screen.getByTestId("toggle-button")
        expect(toggleButton.textContent).toBe("Ouvrir le panier")
    })

})