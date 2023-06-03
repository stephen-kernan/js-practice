// ------------------------------------------------------------------------------------------------
// REQUIREMENTS
// Create a class BankAccount with the following properties:
// - Constructor Parameters
//    - userID - string (use the createUserID function)
//    - openingDeposit - number
//    - accountType - enumeration of Checking, Savings, and Investment
// - All Properties
//    - accountType - enumeration of Checking, Savings, and Investment
//    - accountNumber - number (use the createAccountNumber function)
//    - routingNumber - number (always use 123456789)
//    - userID - string (use the createUserID function)
//    - currentBalance - number
// - Methods
//    - deposit - Make a deposit. Return nothing.
//    - withdraw - Make a withdrawal. Return true if successful, false if the transaction failed.
//    - checkBalance - Returns the current balance
//    - getAccountInformation - Returns the following:
//        - accountNumber
//        - routingNumber
//        - userID
//    - transfer - Accepts a target account as a parameter. Withdraws the money from this account
//    and deposits it into the target account. However, you can only transfer money between two
//    accounts owned by the same user.
// ------------------------------------------------------------------------------------------------

export const createAccountNumber = (): number => {
  let baseNumber = Math.random() * 1_000_000
  if (baseNumber < 100_000) {
    baseNumber += 100_000
  } else if (baseNumber > 1_000_000) {
    baseNumber -= 100_000
  }

  return Math.floor(baseNumber)
}

export const createUserID = (): string => crypto.randomUUID()

// UNCOMMENT BELOW THIS TO GET STARTED
// export class BankAccount {
//
// }
