import {Route, Routes} from "react-router-dom";
import UserPage from "../components/UserPage/UserPage";
import MainPage from "../components/pages/MainPage/MainPage";
import {getHash} from "../api/api";

const AppRoutes = () => {
    const hash = getHash()

    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path={"/show/" + hash} element={<UserPage/>}/>
        </Routes>
    );
};

export default AppRoutes;
