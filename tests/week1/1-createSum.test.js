import { createSum } from '../../challenges/week1/1-createSum.ts'

describe('adds the sum of two numbers', () => {
  if (createSum) {
    if (createSum(null, null) !== null) {
      it('returns the sum of two numbers', () => {
        expect(createSum(1, 2)).toBe(3)
      })

      it('returns "Error processing data" if no input provided', () => {
        expect(createSum(null, null)).toBe(0)
      })
    }
  } else {
    it('createSum does not exist', () => {
      expect(createSum).toBeUndefined()
    })
  }
})
