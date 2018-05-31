import {combineReducers} from 'redux'; // подключаем единый корневой редюсер
import ContactsReducers from './contacts'; // импортируем contacts.js

const allReducers = combineReducers({ // переменная со всеми редюсерами
	contacts: ContactsReducers
});

export default allReducers // экспортируем все редюсеры


//combineReducers ---↓↓↓
//преобразует объект, значениями которого являются различные функции редюсеры, в одну функцию редюсер, которую можно передать в метод createStore