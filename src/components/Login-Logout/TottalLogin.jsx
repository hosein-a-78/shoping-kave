import Login from './Login';
import SignUp from './SignUp'
import { Routes, Route } from 'react-router-dom';

const TottalLogin = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                {/* <Redirect from='/' to="/signup" /> */}
            </Routes>
        </div>
    );
};

export default TottalLogin;