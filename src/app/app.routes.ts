import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'products',
        loadComponent: () =>
            import('./pages/products/products.page').then((m) => m.ProductsPage)
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./pages/home/home.page').then((m) => m.HomePage)
    },
    {
        path: 'orders',
        loadComponent: () =>
            import('./pages/orders/orders.page').then((m) => m.OrdersPage)
    },
    {
        path: 'cart',
        loadComponent: () =>
            import('./pages/cart/cart.page').then((m) => m.CartPage)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
