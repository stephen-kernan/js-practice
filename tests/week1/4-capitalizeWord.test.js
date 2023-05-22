import { capitalizeWord } from '../../challenges/week1/4-capitalizeWord.ts'

describe('toggles capitalization on first letter in a word', () => {
  if (capitalizeWord) {
    it('returns the capitalized word is un-capitalized', () => {
      expect(capitalizeWord('gnarly')).toBe('Gnarly')
    })

    it('returns the capitalized word is capitalized', () => {
      expect(capitalizeWord('Gnarly')).toBe('gnarly')
    })

    it('returns "Error processing data" if no input provided', () => {
      expect(capitalizeWord('')).toBe('')
    })
  } else {
    it('capitalizeWord does not exist', () => {
      expect(capitalizeWord).toBeUndefined()
    })
  }
})
