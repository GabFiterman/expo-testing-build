import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

import { HomeIcon, MapIcon, TestingIcon } from '@/assets/icons';
import { HomeScreen, MapScreen, TestingScreen } from '@/screens';

const pages = [
    {
        index: 0,
        path: '/',
        name: 'Home',
        icon: HomeIcon,
        component: HomeScreen,
        disableSwipe: false,
    },
    {
        index: 1,
        path: '/map',
        name: 'Map',
        icon: MapIcon,
        component: MapScreen,
        disableSwipe: false,
    },
    {
        index: 2,
        path: '/testing',
        name: 'Testing',
        icon: TestingIcon,
        component: TestingScreen,
        disableSwipe: false,
    },
];

const initialState = {
    isLoading: false,
    coordinates: { latitude: -22.824, longitude: -43.523 },
    pages: pages,
    currentPage: pages[0],
};

const pageByIndex = (index) => pages.find((page) => page.index === index);

const reducer = (globalContext, action) => {
    switch (action.type) {
        case 'SET_IS_LOADING':
            return {
                ...globalContext,
                isLoading: action.payload,
            };
        case 'SET_COORDINATES':
            return { ...globalContext, coordinates: action.payload };
        case 'SET_CURRENT_PAGE':
            return { ...globalContext, currentPage: action.payload };
        case 'SET_CURRENT_PAGE_BY_INDEX':
            return {
                ...globalContext,
                currentPage: pageByIndex(action.payload),
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
    const [globalContext, globalDispatch] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ globalContext, globalDispatch }}>
            {children}
        </GlobalContext.Provider>
    );
};

GlobalContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
