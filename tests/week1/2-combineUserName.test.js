import { combineUserName } from '../../challenges/week1/2-combineUserName.ts'

describe("combines a user's first and last name", () => {
  if (combineUserName) {
    it('returns the combined name', () => {
      expect(combineUserName('Sly', 'Cooper')).toBe('Sly Cooper')
    })

    it('returns "Error processing data" if first name bad', () => {
      expect(combineUserName(null, 'Cooper')).toBe('')
    })

    it('returns "Error processing data" if last name bad', () => {
      expect(combineUserName('Sly', null)).toBe('')
    })
  } else {
    it('no function exists yet', () => {
      expect(combineUserName).toBeUndefined()
    })
  }
})
