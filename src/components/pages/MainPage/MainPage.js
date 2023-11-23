import React from 'react';
import EmailForm from "../../EmailForm/EmailForm";
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <EmailForm />
            <button>
                <Link to="/test">Test page</Link>
            </button>
        </div>
    );
};

export default MainPage;
