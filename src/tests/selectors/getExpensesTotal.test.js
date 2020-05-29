import getExpensesTotal from '../../selectors/getExpensesTotal.js';
import expenses from "../fixtures/expenses.js";

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([]);
    expect(total).toBe(0);
});

test('should correctly add up a single expense', () => {
    const total = getExpensesTotal([expenses[0]]);
    expect(total).toBe(195);
});

test('should correctly add up a multiple expenses', () => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});