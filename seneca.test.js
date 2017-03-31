const seneca = require('./seneca');

describe('seneca.isValidEmail()', () => {
  test('isValid returns true for simple myseneca address', () => {
    const simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', () => {
    const gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a non-string', () => {
    const gmailAddress = true;
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a null address', () => {
    const gmailAddress = null;
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a leading whitespace non-myseneca address', () => {
    const gmailAddress = ' someone@myseneca.ca';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns true for a prof myseneca address', () => {
    const gmailAddress = 'someone@senecacollege.ca';
    expect(seneca.isValidEmail(gmailAddress)).toBe(true);
  });

  test('returns true for old-style myseneca address', () => {
    const gmailAddress = 'someone@senecac.on.ca';
    expect(seneca.isValidEmail(gmailAddress)).toBe(true);
  });
});

/**
 * Tests for seneca.formatSenecaEmail()
 */
describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'mshaw';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('name contains space tabs or other control characters', () => {
    const name = 'mshaw  ';
    expect(seneca.formatSenecaEmail(name)).toBe('mshaw@myseneca.ca');
  });

  test('name is null', () => {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe(false);
  });
});
