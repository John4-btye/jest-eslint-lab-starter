const capitalizeWords = require('../index').capitalizeWords;;
const filterActiveUsers = require('../index').filterActiveUsers;
const logAction = require('../index').logAction;

describe('Utility Functions', () => {
    describe('capitalizeWords', () => {
        test('should capitalize the first letter of each word', () => {
            const input = 'hello world';
            const expected = 'Hello World';
            expect(capitalizeWords(input)).toBe(expected);
        });

        test('should handle empty strings', () => {
            const input = '';
            const expected = '';
            expect(capitalizeWords(input)).toBe(expected);
        });
    });

    describe('filterActiveUsers', () => {
        test('should return only active users', () => {
            const users = [
                { name: 'Alice', isActive: true },
                { name: 'Bob', isActive: false },
                { name: 'Charlie', isActive: true }
            ];
            const expected = [
                { name: 'Alice', isActive: true },
                { name: 'Charlie', isActive: true }
            ];
            expect(filterActiveUsers(users)).toEqual(expected);
        });                 
        test('should return an empty array if no users are active', () => {
            const users = [
                { name: 'Alice', isActive: false },
                { name: 'Bob', isActive: false }
            ];
            const expected = [];
            expect(filterActiveUsers(users)).toEqual(expected);
        });
    });

    describe('logAction', () => {
        test('should log the action with username and timestamp', () => {
            const action = 'login';
            const username = 'Alice';
            const logMessage = logAction(action, username);
            expect(logMessage).toMatch(new RegExp(`^User ${username} performed ${action} at `));
        });
    });
}); 


