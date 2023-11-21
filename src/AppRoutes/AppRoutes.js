import {Route, Routes} from "react-router-dom";
import UserPage from "../components/pages/UserPage/UserPage";
import MainPage from "../components/pages/MainPage/MainPage";
import {getHash} from "../api/api";
import NotFound from "../components/pages/NotFound/NotFound";

const AppRoutes = () => {
    const hash = getHash()

    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route exact path={"/show/" + hash} element={<UserPage/>}/>
            <Route exact path="/404" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
