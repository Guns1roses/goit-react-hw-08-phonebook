import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const signUp = async credentials => {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
 
};

export const logIn = async credentials => {
    const { data } = await axios.post('/users/login', credentials);
    return data;
 
};

export const logOut = async () => {
    await axios.post('/users/logout');

};

export const fetchCurrentUser = async () => {
    const { data } = await axios.get('/users/current');
    return data;
 
};