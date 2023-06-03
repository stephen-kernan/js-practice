"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var crypto = require("crypto");
var bankAccount_1 = require("../../challenges/week2/bank/bankAccount");
function createAccount(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.startingBalance, startingBalance = _c === void 0 ? 500 : _c, _d = _b.userID, userID = _d === void 0 ? crypto.randomUUID() : _d, _e = _b.accountType, accountType = _e === void 0 ? 3 : _e;
    return [new bankAccount_1.BankAccount(startingBalance, userID, accountType), startingBalance];
}
describe('ATM Test', function () {
    if (bankAccount_1.BankAccount) {
        describe('deposit()', function () {
            it('adds the correct amount to the balance', function () {
                var _a = createAccount(), acct = _a[0], startingBalance = _a[1];
                acct.deposit(10);
                expect(acct.checkBalance()).toBe(startingBalance + 10);
            });
        });
        describe('withdraw()', function () {
            it('deducts the correct amount from the balance', function () {
                var _a = createAccount(), acct = _a[0], startingBalance = _a[1];
                acct.withdraw(10);
                expect(acct.checkBalance()).toBe(startingBalance - 10);
            });
            it('returns true if transaction succeeds', function () {
                var _a = createAccount(), acct = _a[0], _ = _a[1];
                var success = acct.withdraw(10);
                expect(success).toBe(true);
            });
            it('does not deduct anything if the balance is less than the amount to withdraw', function () {
                var _a = createAccount(), acct = _a[0], startingBalance = _a[1];
                acct.withdraw(startingBalance + 10);
                expect(acct.checkBalance()).toBe(startingBalance);
            });
            it('returns false if transaction fails', function () {
                var _a = createAccount(), acct = _a[0], startingBalance = _a[1];
                var success = acct.withdraw(startingBalance + 10);
                expect(success).toBe(false);
            });
        });
        describe('checkBalance()', function () {
            it('returns the correct amount', function () {
                var _a = createAccount(), acct = _a[0], startingBalance = _a[1];
                expect(acct.checkBalance()).toBe(startingBalance);
            });
        });
        describe('getAccountInformation()', function () {
            it('returns the correct account information', function () {
                var expectedInfo = { userID: '1234', routingNumber: 123456789 };
                var _a = createAccount(__assign({}, expectedInfo)), acct = _a[0], _ = _a[1];
                var acctInfo = acct.getAccountInformation();
                expect(acctInfo.userID).toBe(expectedInfo.userID);
                expect(acctInfo.routingNumber).toBe(expectedInfo.routingNumber);
                expect(acctInfo.accountNumber).toBeLessThan(1000000);
                expect(acctInfo.accountNumber).toBeGreaterThanOrEqual(100000);
            });
        });
        describe('transfer()', function () {
            it('if withdraw successful, deducts the money from the source account', function () {
                var _a = createAccount({ userID: 'user' }), src = _a[0], srcStarting = _a[1];
                var _b = createAccount({ userID: 'user' }), target = _b[0], _ = _b[1];
                src.transfer(20, target);
                expect(src.checkBalance()).toBe(srcStarting - 20);
            });
            it('if withdraw fails, DOES NOT deduct the money from the source account', function () {
                var _a = createAccount({ userID: 'user' }), src = _a[0], srcStarting = _a[1];
                var _b = createAccount({ userID: 'user' }), target = _b[0], _ = _b[1];
                src.transfer(200000, target);
                expect(src.checkBalance()).toBe(srcStarting);
            });
            it('if withdraw successful, deposits the money in the target account', function () {
                var _a = createAccount({ userID: 'user' }), src = _a[0], _ = _a[1];
                var _b = createAccount({ userID: 'user' }), target = _b[0], targetStarting = _b[1];
                src.transfer(20, target);
                expect(target.checkBalance()).toBe(targetStarting + 20);
            });
            it('if withdraw fails, DOES NOT deposit the money in the target account', function () {
                var _a = createAccount({ userID: 'user' }), src = _a[0], _ = _a[1];
                var _b = createAccount({ userID: 'user' }), target = _b[0], targetStarting = _b[1];
                src.transfer(200000, target);
                expect(target.checkBalance()).toBe(targetStarting);
            });
            it('if accounts have different users, DOES NOT deduct the money from the source account', function () {
                var _a = createAccount({ userID: 'user1' }), src = _a[0], srcStarting = _a[1];
                var _b = createAccount({ userID: 'user2' }), target = _b[0], _ = _b[1];
                src.transfer(200000, target);
                expect(src.checkBalance()).toBe(srcStarting);
            });
            it('if accounts have different users, DOES NOT deposit the money in the target account', function () {
                var _a = createAccount({ userID: 'user1' }), src = _a[0], _ = _a[1];
                var _b = createAccount({ userID: 'user2' }), target = _b[0], targetStarting = _b[1];
                src.transfer(200000, target);
                expect(target.checkBalance()).toBe(targetStarting);
            });
        });
    }
    else {
        it("BankAccount doesn't exist", function () {
            expect(bankAccount_1.BankAccount).not.toBeDefined();
        });
    }
});
