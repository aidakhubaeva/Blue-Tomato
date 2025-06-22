// Тип товара в корзине
export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    description: string;
}

// Заказ
export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    date: string;
    status: 'pending' | 'paid' | 'cancelled';
}

// Пользователь
export interface UserState {
    id: string;
    email: string;
    name: string;
    orders: Order[];
}

// Данные для авторизации
export interface AuthCredentials {
    email: string;
    password: string;
}

// Данные для регистрации
export interface RegistrationData {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}