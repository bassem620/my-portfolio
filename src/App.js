import { Route, Routes } from "react-router-dom";

import { Nav, Footer } from './components/index';
import { Home } from './pages/index';

function App() {
    return (
        <>
        <Nav />
        <Routes>
            <Route index element={<Home />}/>
        </Routes>
        <Footer />
        </>
    );
}

export default App;
