import React from 'react';
import styled from 'styled-components';

const SquareStyled = styled.div`
	width: 150px;
	height: 150px;
	border: 4px solid white;
	display: flex;
	align-items: center;
	justify-content: center;
	background: gold;
`;

const ValueStyled = styled.h1`
	font-size: 64px;
`;

const Square = props => (
	<SquareStyled onClick={() => props.onClick()}>
		<ValueStyled>{props.value}</ValueStyled>
	</SquareStyled>
);

export default Square;
