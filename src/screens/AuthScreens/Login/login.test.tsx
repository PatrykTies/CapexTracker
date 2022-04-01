import React from 'react';
import { render, fireEvent, act } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '.';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Login Screen', () => {
  it.only('should render default elements on load', () => {
    // Given
    const navigateMock = jest.fn();

    const { getAllByText } = render(
      <NavigationContainer>
        <LoginScreen navigation={{ navigate: navigateMock }} />
      </NavigationContainer>,
    );

    // When

    // Then
    expect(getAllByText('Keep calm and make waves').length).toBe(1);
  });

  it('should render default elements on load', () => {
    const { getByTestId, getByText } = render(<LoginScreen />);

    fireEvent.press(getByTestId('SignIn.Button'));

    getByText('Required email.');
    getByText('Required password.');
  });

  it('shows invalid user name error message', () => {
    const { getByTestId, getByText, queryAllByText } = render(<LoginScreen />);

    fireEvent.changeText(getByTestId('SignIn.passwordInput'), 'asdf');

    fireEvent.press(getByTestId('SignIn.Button'));

    getByText('Invalid username.');
    expect(queryAllByText('Invalid password.').length).toBe(0);

    fireEvent.changeText(getByTestId('SignIn.usernameInput'), 'invalid input');

    getByText('Invalid username.');
    expect(queryAllByText('Invalid password.').length).toBe(0);
  });

  it('shows invalid password error message', () => {
    const { getByTestId, getByText, queryAllByText } = render(<LoginScreen />);

    fireEvent.changeText(getByTestId('SignIn.usernameInput'), 'example');

    fireEvent.press(getByTestId('SignIn.Button'));

    getByText('Invalid password.');
    expect(queryAllByText('Invalid username.').length).toBe(0);

    fireEvent.changeText(getByTestId('SignIn.passwordInput'), 'invalid input');

    getByText('Invalid password.');
    expect(queryAllByText('Invalid username.').length).toBe(0);
  });

  it('handles valid input submission', async () => {
    //fetch.mockResponseOnce(JSON.stringify({ passes: true }));

    const pushMock = jest.fn();
    const { getByTestId } = render(
      <LoginScreen navigation={{ push: pushMock }} />,
    );

    fireEvent.changeText(getByTestId('SignIn.usernameInput'), 'example');
    fireEvent.changeText(getByTestId('SignIn.passwordInput'), 'asdf');
    fireEvent.press(getByTestId('SignIn.Button'));

    // //expect(fetch.mock.calls).toMatchSnapshot();
    // await act(flushMicrotasksQueue);

    expect(pushMock).toBeCalledWith('App');
  });
});
