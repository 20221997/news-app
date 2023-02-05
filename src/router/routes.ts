import { Home, General} from '../pages';
import { Business, 
    Entertainment, 
    Health, 
    Science, 
    Sports, 
    Tecnology 
} from '../components';
import {Route} from '../interface/interface';

export const routes:Route[] = [
    {
        to:'/',
        path:'home',
        Component: Home,
        name:'home'
    },
    {
        to:'/general',
        path:'general',
        Component: General,
        name:'general'
    },
    {
        to:'/business',
        path:'business',
        Component: Business,
        name:'business'
    },
    {
        to:'/entertaiment',
        path:'entertaiment',
        Component: Entertainment,
        name:'entertaiment'
    },
    {
        to:'/health',
        path:'health',
        Component: Health,
        name:'health'
    },
    {
        to:'/science',
        path:'science',
        Component: Science,
        name:'science'
    },
    {
        to:'/sports',
        path:'sports',
        Component: Sports,
        name:'sports'
    },
    {
        to:'/tecnology',
        path:'tecnology',
        Component: Tecnology,
        name:'tecnology'
    },
];