import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';

import { ErrorModal } from '@/path/to/ErrorModal';

const mockStore = configureStore();
const store = mockStore({});

describe('ErrorModal', () => {
  it('renders the modal when there is an error message', () => {
    render(
      <Provider store={store}>
        <ErrorModal message="Test error" />
      </Provider>
    );

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Test error')).toBeInTheDocument();
    expect(screen.getByText('Close')).toBeInTheDocument();
  });

  it('does not render anything when the message is null', () => {
    const { container } = render(
      <Provider store={store}>
        <ErrorModal message={null} />
      </Provider>
    );

    expect(container).toBeEmptyDOMElement();
  });

  it('calls onClose and dispatches setError when close button is clicked', () => {
    const mockOnClose = jest.fn();
    render(
      <Provider store={store}>
        <ErrorModal message="Test error" onClose={mockOnClose} />
      </Provider>
    );

    fireEvent.click(screen.getByText('Close'));

    expect(mockOnClose).toHaveBeenCalled();
    const actions = store.getActions();
    expect(actions[0].type).toEqual('setError');
    expect(actions[0].payload).toBeNull();
  });
});
