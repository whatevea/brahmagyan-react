import { Routes, Route, } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Page from './components/pages/Page';
function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Homepage />} />
                <Route path="/aboutus" element={<Homepage />} />
                <Route path="/page/:pageNumber" element={<Page />} />
            </Routes>





        </div>
    );
}

export default App;
