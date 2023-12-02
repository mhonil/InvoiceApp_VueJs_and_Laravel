import { createRouter, createWebHistory } from "vue-router";

import invoiceIndex from '../components/invoices/index.vue';

import invoiceNew from '../components/invoices/new.vue';

import invoiceShow from '../components/invoices/show.vue';

import invoiceEdit from '../components/invoices/edit.vue';

import notFound from '../components/NotFound.vue';

const router = createRouter({history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name: 'invoiceIndex',
            component: invoiceIndex
        },
        {
            path:'/invoices/new',
            name: 'invoiceNew',
            component: invoiceNew
        },
        {
            path:'/invoices/show/:id',
            name: 'invoiceShow',
            component: invoiceShow,
            props:true
        },
        {
            path:'/invoices/edit/:id',
            name: 'invoiceEdit',
            component: invoiceEdit,
            props:true
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'NotFound',
            component: notFound
        },

    ]
})
    

export default router