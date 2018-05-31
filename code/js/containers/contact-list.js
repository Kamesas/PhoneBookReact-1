import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; // https://github.com/rajdee/redux-in-russian/blob/master/docs/api/bindActionCreators.md
import {connect} from 'react-redux'; //  получает в качестве props для компонента данные из store
									//подключи React компонент к Redux store.

class ContactList extends Component {
	render() {
		return(

			<ol>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ol>

		);
	}
}

function mapStateToProps (state) { //ф-ция которая будет следить за состоянием/изменением
	return{
		contacts: state.contact
	}
}

export default connect(mapStateToProps)(ContactList); 