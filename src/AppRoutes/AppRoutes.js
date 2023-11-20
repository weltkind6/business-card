import {Route, Routes} from "react-router-dom";
import UserPage from "../components/UserPage/UserPage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/show" element={<UserPage/>}/>
        </Routes>
    );
};

export default AppRoutes;
