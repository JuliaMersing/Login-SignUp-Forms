import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

const mockUseDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockUseDispatch,
}));

describe('Form', () => {
  const setUp = () => {
    const utils = render(<Form />);

    const formButton = screen.getByRole('button');
    const rememberCheck = screen.getByRole('checkbox');

    return {
      ...utils,
      formButton,
      rememberCheck,
    };
  };
  test('should render component and match snapshot', () => {
    const { container } = render(<Form />);
    expect(container).toMatchSnapshot();
  });
  test('should send form and call useDispatch when button is clicked', async () => {
    const {
      formButton,
    } = setUp();

    await userEvent.click(formButton);
    expect(mockUseDispatch).toHaveBeenCalled();
  });
});
