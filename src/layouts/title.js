import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

/**
 * Styled Square components
 */
const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const LogoStyled = styled.img`
	animation: App-logo-spin infinite 20s linear;
	height: 40px;
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const ValueStyled = styled.h1`
	font-size: 1.2em;
	padding-left: 4px;
`;

/**
 * Square functional component
 */
const Title = props => (
	<TitleWrapper>
		<ValueStyled>3 EN RAYA</ValueStyled>
		<LogoStyled src={logo} />
	</TitleWrapper>
);

export default Title;
