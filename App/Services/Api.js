// a library to wrap and simplify api calls
import apisauce from 'apisauce';
import Constants from '../Config/Constants';

// our "constructor"
const create = (baseURL = '') => {
    const api = apisauce.create({
        // condensed URL is read from the "constructor"
        baseURL,
        // here are some default headers
        headers: {
            'Cache-Control': 'no-cache',
        },
        // 10 second timeout...
        timeout: 10000,
    });

    // const buildQueryData = data => ({
    //     ...data,
    //     createdAt: new Date().toISOString(),
    // });


    /* User functions */
    const userLogin = ({ login, pass }) =>  api.get(baseURL,
        {
            action: 'auth',
            login,
            pass,
        });

    const userSignUp = ({ login, pass, name }) => api.get(baseURL,
        {
            action: 'reg',
            login,
            pass,
            name,
        });

    const userUpdate = ({ token, name }) => api.get(baseURL,
        {
            action: 'update',
            token,
            name,
        });

    const userLogout = ({ token }) => api.get(baseURL,
        {
            action: 'logout',
            token
        });

    const roomCreate = ({ token, name }) => api.get(baseURL,
        {
            action: 'create',
            token,
            name
        });

    const roomFind = ({ token, name }) => api.get(baseURL,
        {
            action: 'find',
            token,
            name
        });

    return {
        userLogin,
        userSignUp,
        userLogout,
        userUpdate,
        roomCreate,
        roomFind,
    };
};

// let's return back our create method as the default.
export default {
    create,
};
