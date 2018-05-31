import React, {Component} from 'react';
import {bindActionCreators} from 'redux'; // https://github.com/rajdee/redux-in-russian/blob/master/docs/api/bindActionCreators.md
import {connect} from 'react-redux'; //  получает в качестве props для компонента данные из store
									//подключи React компонент к Redux store.

class ContactList extends Component {

	showList(){
		return this.props.contacts.map((contact) =>{
			return(
				<li key={contact.id}>{contact.name}</li>
			)
		});
	}

	render() {
		return(

			<ol>				
				<li key={contact.id}>{contact.name}</li>
				<li onClick={() => this.props.select (contact)} key={contact.id}>{contact.name}</li>
			</ol>

		);
	}
}

function mapStateToProps (state) { //ф-ция которая будет следить за состоянием/изменением
	return{
		contacts: state.contact
	}
}

function matchDispatchToProps (dispatch) {
	return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);