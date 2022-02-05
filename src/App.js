import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* root , not found , all path the same */}
                <Route path="*" element={<HomeScreen />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
