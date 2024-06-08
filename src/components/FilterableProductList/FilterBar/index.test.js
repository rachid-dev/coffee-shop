import {render} from '@testing-library/react'
import FilterBar from '.'

describe("FilterBar", () => {
    const mockSetProductToSearch = jest.fn()
    it("should render without crash", () =>{
        render(<FilterBar setProductToSearch={mockSetProductToSearch} />)

    })
})