import React from 'react';
import { screen, render } from '@testing-library/react';
import AddUser from '../../../views/AddUser';

describe('Form element', () => {
  it('should render username input', function () {
    render(<AddUser />);

    const userNameInput = screen.getByLabelText('User Name');

    expect(userNameInput).toBeInTheDocument();
  });
});
