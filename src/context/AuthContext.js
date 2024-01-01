import createDataContext from "./createDataContext";
import AsyncStorage from '@react-native-async-storage/async-storage';
import tracker from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clearErrorMessage':
            return { ...state, errorMessage: '' };
        default:
            return state;
    }
}

const tryLocalSignin = () => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clearErrorMessage' });
}

const signup = dispatch => async ({ email, password }, callback) => {
    try {
        const response = await tracker.post('/signup', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signup', payload: response.data.token })

        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up.' });
    }
};


const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await tracker.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token });

        navigate('TrackList');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in.' })
    }
};


const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);