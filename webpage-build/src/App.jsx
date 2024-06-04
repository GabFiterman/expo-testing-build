import { useContext, createElement } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import { GlobalContext } from '@/contexts';
import { MenuHeader } from './components';

import { ScreenContainer } from '@/components/generic-styled';

import './App.css';

function App() {
    const { globalContext } = useContext(GlobalContext);

    const pageRoutes = globalContext?.pages?.map((page, index) => {
        const pageElement = createElement(page.component);

        return <Route key={index} path={page.path} element={pageElement} />
    });

    return (
        <Router>
            <MenuHeader />
            <ScreenContainer>
                <Routes>{pageRoutes}</Routes>
            </ScreenContainer>
        </Router>
    )
}

export default App;
