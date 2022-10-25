import { createStore,configureStore ,applyMiddleware,compose } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import noticiasReducer from './noticiaSlice';
import videoReducer from './videoSlice';
import imagenesReducer from './imagenesSlice'
import habilidadesReducer from './habilidadesSlice'
import expertoReducer from "./expertosSlice"
import competidoresReducer from "./competidoresSlice"
import counterRenducer from "./counterSlice"
import dataStaticaReducer from "./datosStaticosSlice"
import thunk from 'redux-thunk';
import noticiaSlice from './noticiaSlice';
import logrosSlice from './logrosSlice';

const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers=(previousState, action) => previousState

export const store = configureStore({
    reducer:{
        noticias:noticiasReducer,
        video:videoReducer,
        imagenes:imagenesReducer,
        habilidades:habilidadesReducer,
        expertos:expertoReducer,
        competidores:competidoresReducer,
        counter:counterRenducer,
        logros:logrosSlice,
        datosEs:dataStaticaReducer
    }
})