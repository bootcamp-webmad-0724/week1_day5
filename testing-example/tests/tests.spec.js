

describe("function doubleValue", () => {

    it("Should exist", () => {
        expect(doubleValue).toBeDefined()
        expect(typeof doubleValue).toBe('function')
    })

    it("Should return the argumented value * 2", () => {
        expect(doubleValue(2)).toBe(4)
        expect(doubleValue(3)).toBe(6)
        expect(doubleValue(0)).toBe(0)
    })

    it("If no argument is passed, return 0", () => {
        expect(doubleValue()).toBe(0)
    })
})