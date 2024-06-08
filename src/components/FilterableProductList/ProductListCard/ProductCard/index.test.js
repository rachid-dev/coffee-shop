import {render} from '@testing-library/react'
import ProductCard from '.'

describe("ProductCard", () => {

    const product = {id: "1", name : "Nespresso", price : { value : 30, devise : "$"}, image : "/nespresso.jpeg"}

    it("should rende without crash", () => {
        render(<ProductCard product={product}/>)
    })
})