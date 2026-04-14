import { describe, it, expect } from 'vitest';
import { sayHello } from './case';

describe('hello world test', () => {
  it('should return hello world', () => {
    expect(sayHello()).toEqual('hello world');
  });
});