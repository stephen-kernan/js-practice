import { toggleCapitalization } from '../../challenges/week1/5-toggleCapitalization.ts'

describe('finds first letter in a word', () => {
  if (toggleCapitalization) {
    it('returns the capitalized word if given word is uncapitalized', () => {
      expect(toggleCapitalization('gnarly')).toBe('Gnarly')
    })

    it('returns the uncapitalized word if given word is capitalized', () => {
      expect(toggleCapitalization('Gnarly')).toBe('gnarly')
    })

    it('returns "Error processing data" if no input provided', () => {
      expect(toggleCapitalization()).toBe('Error processing data')
    })

    it('returns "Error processing data" if non-string provided', () => {
      expect(toggleCapitalization(1)).toBe('Error processing data')
    })
  } else {
    it('toggleCapitalization does not exist', () => {
      expect(toggleCapitalization).toBeUndefined()
    })
  }
})
