import { fireEvent, render, screen } from "@testing-library/react"
import CartFrame from "."

describe("CartFrame", () => {

    const cart = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg", quantity : 2},
        {id: "2", name : "Senseo", price : { value : 40, devise : "$"}, image : "/nespresso.jpeg", quantity : 1}
    ]

    const mockSetCart = jest.fn()

    it("should close and open the frame when we click on <<Fermer>> and <<Ouvrir le panier>>", () =>{
        
        render(<CartFrame cartState={[cart, mockSetCart]}/>)
        const toggleButton = screen.getByTestId("toggle-button")
        const cartProducts = screen.getByTestId("cart-products")
        expect(toggleButton.textContent).toBe("Fermer")
        expect(cartProducts.textContent).toBe("2 Nespresso 30 $1 Senseo 40 $")

        fireEvent.click(toggleButton)

        expect(toggleButton.textContent).toBe("Ouvrir le panier")
        expect(cartProducts.textContent).toBe("2 Nespresso 30 $1 Senseo 40 $")

        fireEvent.click(toggleButton)

        expect(toggleButton.textContent).toBe("Fermer")
        expect(cartProducts.textContent).toBe("2 Nespresso 30 $1 Senseo 40 $")


    })

})