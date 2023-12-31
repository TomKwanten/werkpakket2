import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import OverzichtView from '@/views/OverzichtView.vue';
import DetailView from '@/views/DetailView.vue';
import CartView from '@/views/CartView.vue';
import CheckoutView from '@/views/CheckoutView.vue'
import BevestigingView from '@/views/BevestigingView.vue';
import LoginView from '@/views/LoginView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home', 
        },
        {
            path: '/home',
            component: HomeView
        },
        {
            path: '/product/:id',  
            component: DetailView,
        },
        {
            path: '/overzicht',
            component: OverzichtView
        },
        {
            path: '/winkelmand',
            component: CartView,
        },
        {
            path: '/checkout',
            component: CheckoutView,
        },
        {
            path: '/bevestiging',
            component: BevestigingView,
        },
        {
            path: '/login',
            component: LoginView,
        }
    ]
});

export default router;
