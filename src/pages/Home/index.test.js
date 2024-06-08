import { fireEvent, render, screen } from "@testing-library/react";
import Home from ".";

describe("Home", () => {

    it("should render without crash", () => {
        render(<Home/>)
    })

    
    it("should render without crash and add product to the cart", () => {
        render(<Home/>)

        const cartProducts = screen.getByTestId("cart-products")
        const addButton = screen.getByTestId("add-to-cart-1")

        // when adding the product to the cart
        fireEvent.click(addButton);

        //then
        expect(cartProducts.textContent).toBe("1 Nespresso 30 $")


    })


    it("should render without crash and clear the cart", () => {
        render(<Home/>)

 
        const cartProducts = screen.getByTestId("cart-products")
        const clearButton = screen.getByTestId("clear-cart")
        const addButton = screen.getByTestId("add-to-cart-1")

        //add the product to the cart
        fireEvent.click(addButton);

        //our cart contains products
        expect(cartProducts.textContent).toBe("1 Nespresso 30 $")

        //when clicking on the button <<Vider le panier>>
        fireEvent.click(clearButton)

        //then cart should be emplty
        expect(cartProducts.textContent).toBe("")



    })
})