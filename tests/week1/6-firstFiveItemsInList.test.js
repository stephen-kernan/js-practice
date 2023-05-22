import { findFirstFiveItemsInList } from '../../challenges/week1/6-firstFiveItemsInList.ts'

describe('finds first five items in list', () => {
  const testList = [
    'Demon Slayer',
    'Jujutsu Kaisen',
    'Naruto',
    'Attack on Titan',
    'Fullmetal Alchemist: Brotherhood',
    'Hunter x Hunter',
    'Death Note',
    'Bleach',
    'One Punch Man',
    'Inuyasha',
  ]

  if (findFirstFiveItemsInList) {
    it('if list with > 5 items provided, returns the first five items of list', () => {
      expect(findFirstFiveItemsInList(testList)).toEqual(testList.slice(0, 5))
    })
    it('if list with less than 5 items provided, returns all items', () => {
      expect(findFirstFiveItemsInList(testList.slice(7))).toEqual(
        testList.slice(7),
      )
    })
    it('if empty list provided, returns empty list', () => {
      expect(findFirstFiveItemsInList([])).toEqual([])
    })
  } else {
    it('firstFiveItemsInList does not exist', () => {
      expect(findFirstFiveItemsInList).toBeUndefined()
    })
  }
})
