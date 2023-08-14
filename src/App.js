import { Route, Routes } from "react-router-dom";

import { Nav, Footer } from './components/index';
import PagesContainer from './pages/PagesContainer';

function App() {
    return (
        <>
        <Nav />
        <Routes>
            <Route path="/" element={<PagesContainer />}/>
        </Routes>
        <Footer />
        </>
    );
}

export default App;
