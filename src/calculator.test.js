import { describe, it, expect } from 'vitest';
import { add, subtract } from './calculator';

describe('Calculator', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('adds negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
  });

  it('converts string inputs to numbers when adding', () => {
    expect(add('2', '3')).toBe(5);
  });

  it('subtracts two positive numbers', () => {
    expect(subtract(8, 3)).toBe(5);
  });

  it('subtracts a larger number from a smaller number', () => {
    expect(subtract(3, 8)).toBe(-5);
  });
});

