import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vitest } from 'vitest';
import ProductAction from '../components/ProductAction';

describe('ProductAction component', () => {
  const mockProduct = {
    id: 1,
    name: 'Test Product',
    price: 100,
  };
  test('calls addToCart with correct product when button is clicked', () => {
    const addToCartMock = vitest.fn();

    render(<ProductAction addToCart={addToCartMock} product={mockProduct} />);

    const button = screen.getByRole('button', { name: /Dodaj do koszyka/i });
    button.click();

    expect(addToCartMock).toHaveBeenCalledWith(mockProduct);
  });
});
