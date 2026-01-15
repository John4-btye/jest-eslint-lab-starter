const { describe, test, expect } = require('@jest/globals');
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

        test('should handle strings with special characters', () => {
            const input = 'hello-world! this is a test.';
            const expected = 'Hello-World! This Is A Test.';
            expect(capitalizeWords(input)).toBe(expected);
        });

        test('should handle single word strings', () => {
            const input = 'javascript';
            const expected = 'Javascript';
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
        
        test('should return an array with all inactive users', () => {
            const users = [
                { name: 'Alice', isActive: false },
                { name: 'Bob', isActive: false }
            ];
            const expected = [];
            expect(filterActiveUsers(users)).toEqual(expected);
            
            

        });

            test('should empty array when no users are active', () => {
            const users = [
                { name: 'Dave', isActive: false },
                { name: 'Eve', isActive: false }
            ];
            const expected = [];
            expect(filterActiveUsers(users)).toEqual(expected);
            });

            test('should handle an empty array', () => {
            const users = [];
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
        test('should handle missing action or username', () => {
            const action = '';
            const username = 'Bob';
            const logMessage = logAction(action, username);
            expect(logMessage).toMatch(new RegExp(`^User ${username} performed  at `));
        });
        test('should handle empty strings for both action and username', () => {
            const action = '';
            const username = '';
            const logMessage = logAction(action, username);
            expect(logMessage).toMatch(new RegExp(`^User  performed  at `));
        });

    });
        test('should return an empty array when given an empty array', () => {
    const users = [];
    const expected = [];
    expect(filterActiveUsers(users)).toEqual(expected);
    });
});