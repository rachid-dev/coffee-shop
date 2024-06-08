import {render} from '@testing-library/react'
import FilterableProductList from '.'

describe("FilterableProductList", () => {

    const productList = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"},
        {id: "2", name : "Senseo", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"}
    ]

    const cart = [
        {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"}
    ]

    const mockSetCart = jest.fn()

    const mockCartState = [cart, mockSetCart]

    it("should render without crash", () => {
        render(<FilterableProductList productList={productList} cartState={mockCartState}/>)
    })
})