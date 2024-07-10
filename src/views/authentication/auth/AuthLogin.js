import React, { useState } from 'react';
import {
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    Button,
    Stack,
    Checkbox
} from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setSession, Types } from '../../../store/actions/authActions'; // Make sure to import these correctly

const AuthLogin = ({ title, subtitle, subtext }) => {
    const [username, setUsername] = useState("Demo123@gmail.com");
    const [password, setPassword] = useState("Qp2@rL3x!");
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        const body = {
            query: `
              mutation ($loginAuthInput: CreateLoginAuthInput!) {
  login(loginAuthInput: $loginAuthInput) {
    accessToken
    refreshToken
  }
}
            `,
            variables: {
                "loginAuthInput": {
                  "username": "Demo123@gmail.com",
                  "password": password
                }
              }
        };

        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const url = import.meta.env.VITE_REACT_APP_BACKEND_HOST ?? 'http://localhost:8000/graphql'; // Replace with your GraphQL endpoint URL

        try {
            const response = await axios.post(url, body, options);
            const accessToken = response.data.data.login.accessToken;
            window.localStorage.setItem('accessToken', accessToken);
            // setSession(accessToken);
            // dispatch({
            //     type: Types.Login,
            //     payload: {
            //         user: {} // Adjust based on your user data structure
            //     }
            // });
            navigate('/');
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error (e.g., show error message to the user)
        }
    };

    return (
        <>
            {title ? (
                <Typography fontWeight="700" variant="h2" mb={1}>
                    {title}
                </Typography>
            ) : null}

            {subtext}

            <Stack>
                <Box>
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='username' mb="5px">Username</Typography>
                    <CustomTextField 
                        id="username" 
                        variant="outlined" 
                        fullWidth 
                        value={username} 
                        onChange={handleUsernameChange} 
                        placeholder="Enter your username or email" 
                    />
                </Box>
                <Box mt="25px">
                    <Typography variant="subtitle1"
                        fontWeight={600} component="label" htmlFor='password' mb="5px">Password</Typography>
                    <CustomTextField 
                        id="password" 
                        type="password" 
                        variant="outlined" 
                        fullWidth 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder="Enter your password" 
                    />
                </Box>
                <Stack justifyContent="space-between" direction="row" alignItems="center" my={2}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Remember this Device"
                        />
                    </FormGroup>
                    <Typography
                        component={Link}
                        to="/"
                        fontWeight="500"
                        sx={{
                            textDecoration: 'none',
                            color: 'primary.main',
                        }}
                    >
                        Forgot Password?
                    </Typography>
                </Stack>
            </Stack>
            <Box>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    fullWidth
                    type="button"
                    onClick={handleLogin}
                >
                    Sign In
                </Button>
            </Box>
            {subtitle}
        </>
    );
};

export default AuthLogin;
