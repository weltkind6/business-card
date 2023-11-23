import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import UserPage from "../components/pages/UserPage/UserPage";
import MainPage from "../components/pages/MainPage/MainPage";
import {getApiUrl, getHash} from "../api/api";
import NotFound from "../components/pages/NotFound/NotFound";
import {useEffect} from "react";
import axios from "axios";

const AppRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate()

    const hash = getHash()

    useEffect(() => {
        const fetchData = async () => {
            try {
                await axios.get(getApiUrl())
            } catch (error) {
                navigate("/")
                console.log(error)
            }
        }
        fetchData().catch(error => console.log(error))
    }, [])

    if (location.pathname === "/show" && !hash) {
        return <Navigate to="/" replace />;
    }

    return (
        <Routes>
            <Route exact path="/" element={<MainPage/>}/>
            <Route
                exact
                path="/show/:hash"
                element={<UserPage />}
            />

            <Route exact path="/404" element={<NotFound/>}/>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};

export default AppRoutes;
