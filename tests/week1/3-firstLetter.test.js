import { findFirstLetter } from '../../challenges/week1/3-firstLetter.ts'

describe('finds first letter in a word', () => {
  if (findFirstLetter) {
    it('returns the first letter', () => {
      expect(findFirstLetter('gnarly')).toBe('g')
    })

    it('returns "Error processing data" if no input provided', () => {
      expect(findFirstLetter()).toBe('Error processing data')
    })

    it('returns "Error processing data" if non-string provided', () => {
      expect(findFirstLetter(1)).toBe('Error processing data')
    })
  } else {
    it('findFirstLetter does not exist', () => {
      expect(findFirstLetter).toBeUndefined()
    })
  }
})
