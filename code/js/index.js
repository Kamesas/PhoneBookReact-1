import 'babel-polyfill'; // решаем проблему с кроссбраузерностью
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux'; // подклчаем хранилище
import allReducers from './reducers' // подключаем все редюсеры
import WebPage from './components/WebPage'; // здесь сходятся все экшены, контейнеры и компоненты
//npm run start

const store = createStore(allReducers); //хранилище со всеми переходниками/редукторами/редюсерами

ReactDOM.render(
  <Provider store={store}>
	  <WebPage />
	</Provider>, 
  document.getElementById('PhoneBook')
);
