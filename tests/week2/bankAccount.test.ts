import * as crypto from 'crypto'
import { BankAccount } from '../../challenges/week2/bank/bankAccount'

function createAccount({
  startingBalance = 500,
  userID = crypto.randomUUID(),
  accountType = 3,
} = {}): [BankAccount, number] {
  return [new BankAccount(startingBalance, userID, accountType), startingBalance]
}

describe('ATM Test', () => {
  if (BankAccount) {
    describe('deposit()', () => {
      it('adds the correct amount to the balance', () => {
        const [acct, startingBalance]: [BankAccount, number] = createAccount()
        acct.deposit(10)
        expect(acct.checkBalance()).toBe(startingBalance + 10)
      })
    })
    describe('withdraw()', () => {
      it('deducts the correct amount from the balance', () => {
        const [acct, startingBalance] = createAccount()
        acct.withdraw(10)
        expect(acct.checkBalance()).toBe(startingBalance - 10)
      })
      it('returns true if transaction succeeds', () => {
        const [acct, _] = createAccount()
        const success = acct.withdraw(10)
        expect(success).toBe(true)
      })
      it('does not deduct anything if the balance is less than the amount to withdraw', () => {
        const [acct, startingBalance] = createAccount()
        acct.withdraw(startingBalance + 10)
        expect(acct.checkBalance()).toBe(startingBalance)
      })
      it('returns false if transaction fails', () => {
        const [acct, startingBalance] = createAccount()
        const success = acct.withdraw(startingBalance + 10)
        expect(success).toBe(false)
      })
    })
    describe('checkBalance()', () => {
      it('returns the correct amount', () => {
        const [acct, startingBalance] = createAccount()
        expect(acct.checkBalance()).toBe(startingBalance)
      })
    })
    describe('getAccountInformation()', () => {
      it('returns the correct account information', () => {
        const expectedInfo = { userID: '1234', routingNumber: 123456789 }
        const [acct, _] = createAccount({ ...expectedInfo })
        const acctInfo = acct.getAccountInformation()
        expect(acctInfo.userID).toBe(expectedInfo.userID)
        expect(acctInfo.routingNumber).toBe(expectedInfo.routingNumber)
        expect(acctInfo.accountNumber).toBeLessThan(1_000_000)
        expect(acctInfo.accountNumber).toBeGreaterThanOrEqual(100_000)
      })
    })
    describe('transfer()', () => {
      it('if withdraw successful, deducts the money from the source account', () => {
        const [src, srcStarting] = createAccount({ userID: 'user' })
        const [target, _] = createAccount({ userID: 'user' })
        src.transfer(20, target)
        expect(src.checkBalance()).toBe(srcStarting - 20)
      })
      it('if withdraw fails, DOES NOT deduct the money from the source account', () => {
        const [src, srcStarting] = createAccount({ userID: 'user' })
        const [target, _] = createAccount({ userID: 'user' })
        src.transfer(200_000, target)
        expect(src.checkBalance()).toBe(srcStarting)
      })
      it('if withdraw successful, deposits the money in the target account', () => {
        const [src, _] = createAccount({ userID: 'user' })
        const [target, targetStarting] = createAccount({ userID: 'user' })
        src.transfer(20, target)
        expect(target.checkBalance()).toBe(targetStarting + 20)
      })
      it('if withdraw fails, DOES NOT deposit the money in the target account', () => {
        const [src, _] = createAccount({ userID: 'user' })
        const [target, targetStarting] = createAccount({ userID: 'user' })
        src.transfer(200_000, target)
        expect(target.checkBalance()).toBe(targetStarting)
      })
      it('if accounts have different users, DOES NOT deduct the money from the source account', () => {
        const [src, srcStarting] = createAccount({ userID: 'user1' })
        const [target, _] = createAccount({ userID: 'user2' })
        src.transfer(200_000, target)
        expect(src.checkBalance()).toBe(srcStarting)
      })
      it('if accounts have different users, DOES NOT deposit the money in the target account', () => {
        const [src, _] = createAccount({ userID: 'user1' })
        const [target, targetStarting] = createAccount({ userID: 'user2' })
        src.transfer(200_000, target)
        expect(target.checkBalance()).toBe(targetStarting)
      })
    })
  } else {
    it("BankAccount doesn't exist", () => {
      expect(BankAccount).not.toBeDefined()
    })
  }
})
