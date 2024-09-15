import { AppBar, Toolbar, styled } from '@mui/material'; 
import { Link, useNavigate } from 'react-router-dom';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
`;

const Container = styled(Toolbar)`
    justify-content: center;
    & > a {
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;

const Header = ({ isUserAuthenticated }) => {
    const navigate = useNavigate();

    const logoutUser = () => {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        isUserAuthenticated(false);
        navigate('/account');
    };

    return (
        <Component>
            <Container>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                <Link to='/account' onClick={logoutUser}>LOGOUT</Link>
            </Container>
        </Component>
    );
};

export default Header;
