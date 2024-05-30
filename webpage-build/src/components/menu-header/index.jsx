import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { GlobalContext } from '@/contexts';

import { MenuHeaderNav, MenuUl } from './StyledComponents';

const MenuHeader = () => {
    const { globalContext, globalDispatch } = useContext(GlobalContext);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (route) => location.pathname === route;
    const updatePageByRoute = (selectedRoute) => {
        const pageIndex = globalContext.pages.findIndex(
            (page) => page.path === selectedRoute
        );
        if (pageIndex !== -1) {
            globalDispatch({
                type: 'SET_CURRENT_PAGE_BY_INDEX',
                payload: pageIndex,
            });
        }
    };

    useEffect(() => {
        const navigateTo =
            globalContext.pages[globalContext.currentPage.index].path;
        navigate(navigateTo);
    }, [globalContext.currentPage.index, navigate, globalContext.pages]);

    return (
        <MenuHeaderNav>
            <MenuUl>
                {globalContext.pages.map((page, index) => (
                    <li key={index}>
                        <button
                            onClick={() => updatePageByRoute(page.path)}
                            className={isActive(page.path) ? 'activeLink' : ''}
                        >
                            <page.icon color='white' size='1.5em' />
                        </button>
                    </li>
                ))}
            </MenuUl>
        </MenuHeaderNav>
    );
};

export default MenuHeader;
