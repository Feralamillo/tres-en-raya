import React, { Component } from 'react';
import swal from 'sweetalert2';
import Play from './components/play';
import styled from 'styled-components';

const AppStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;
swal({
	title: 'Bienvenido a 3 en Raya',
	text: 'Coloca las opciones en uno de los cuadros',
	type: 'info',
	width: '800px',
	footer: 'Aplicación desarrollada con React',
});

class App extends Component {
	render() {
		console.log('App running');
		return (
			<div className="App">
				<AppStyled>
					<Play />
				</AppStyled>
			</div>
		);
	}
}

export default App;
