import React from 'react';
import ContactList from '../containers/contact-list';
//import '../../../src/css/semantic.min.css'

const WebPage = () => ( // собирает все экшены, компоненты, контейнеры и выводит на экран

	<div>
		<h2>Contacts: </h2>
		<ContactList />
		<hr />
		<h3>Other: </h3>
	</div>

);

export default WebPage;