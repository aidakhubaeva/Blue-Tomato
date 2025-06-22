import type { CartItem } from '../../types';

export interface PayProps {
    items: CartItem[];
    total: number;
}