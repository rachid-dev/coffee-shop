import {render, screen} from '@testing-library/react'
import ProductListCard from '.'

describe("ProductListCard", () =>{

    const productList = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
        {id: "2", name : "Senseo", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"}
    ]

    const cart = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"}
    ]

    const mockSetCart = jest.fn()

    const mockCartState = [cart, mockSetCart]


    it("sould render without crash and display all the products", ()=>{

        const productToSearch = ""
        render(<ProductListCard productList={productList} cartState={mockCartState} productToSearch={productToSearch}  />)

        const filteredProductListCards = screen.getByTestId("list-products")
        expect(filteredProductListCards.textContent).toBe("Nespresso30$AjouterSenseo30$Ajouter")
    })


    it("sould render without crash and display only the products being searched", ()=>{

        const productToSearch = "Nespresso"
        render(<ProductListCard productList={productList} cartState={mockCartState} productToSearch={productToSearch}  />)

        const filteredProductListCards = screen.getByTestId("filtered-list-products")
        expect(filteredProductListCards.textContent).toBe("Nespresso30$Ajouter")
    })
})