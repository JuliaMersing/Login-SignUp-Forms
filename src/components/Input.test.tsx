import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Input from './Input';

describe('Input component', () => {
  const setUp = () => {
    const mockHandleOnChange = jest.fn();
    const mockHandleEmailOnBlur = jest.fn();

    const utils = render(<Input
      label="Email"
      id="email"
      type="email"
      value=""
      placeholder="Email"
      onChange={mockHandleOnChange}
      onBlur={mockHandleEmailOnBlur}
      error=""
    />);
    return {
      ...utils,
      mockHandleEmailOnBlur,
      mockHandleOnChange,
    };
  };
  test('call handleOnChange when user enter an email', async () => {
    const {
      mockHandleOnChange,
    } = setUp();

    const email = 'test@gmail.com';
    const input = screen.getByRole('textbox', { name: '' });
    await userEvent.type(input, email);

    expect(mockHandleOnChange).toHaveBeenCalled();
  });

  test('call handleErrorEmail when email is not valid', async () => {
    const {
      mockHandleOnChange,
        mockHandleEmailOnBlur,
    } = setUp();

    const email = 'test.com';
    const input = screen.getByRole('textbox', { name: '' });
    await userEvent.type(input, email);

    expect(mockHandleOnChange).toHaveBeenCalled();
    await userEvent.tab();
    expect(mockHandleEmailOnBlur).toHaveBeenCalled();
  });
});
