import {render, screen} from '@testing-library/react'
import CartProductList from '.'

describe("CartProductList", () => {

    const cart = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg", quantity : 2},
        {id: "2", name : "Senseo", price : { value : 40, devise : "$"}, image : "/nespresso.jpeg", quantity : 1}
    ]

    const mockSetCart = jest.fn();
    it("should render all products in the cart and their total", () => {
        const mockCartState = [cart, mockSetCart]
        render(<CartProductList cartState={mockCartState}/>)
        const cartProductroductList = screen.getByTestId("cart-products")
        const total = screen.getByTestId("total")
        expect(cartProductroductList.textContent).toBe("2 Nespresso 30 $1 Senseo 40 $")
        expect(total.textContent).toBe("Total : 100$")
        

    })


    it("should render a blank list and the total should be 0", () => {
        const mockCartState = [[], mockSetCart]
        render(<CartProductList cartState={mockCartState}/>)
        const cartProductroductList = screen.getByTestId("cart-products")
        const total = screen.getByTestId("total")
        expect(cartProductroductList.textContent).toBe("")
        expect(total.textContent).toBe("Total : 0")

    })


})