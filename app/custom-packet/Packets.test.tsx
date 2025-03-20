import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Packets from './Packets';

test('handleDecrement function decrements the count and removes item when count is 0', () => {
    const { getByText, queryByText } = render(<Packets />);

    // İlk olarak, bir ürünü ekleyelim
    const addButton = getByText('Add Product');
    fireEvent.click(addButton);

    // Ürünün eklendiğini doğrulayalım
    expect(getByText('1 Product Name')).toBeInTheDocument();

    // Ürünü azaltalım
    const decrementButton = getByText('Decrement');
    fireEvent.click(decrementButton);

    // Ürünün kaldırıldığını doğrulayalım
    expect(queryByText('1 Product Name')).not.toBeInTheDocument();
});