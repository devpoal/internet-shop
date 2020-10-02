import React from 'react';
import s from './Header.module.scss';
import cx from 'classnames';

const Header = ({type}) => {
	return (
		<div className={cx(s['header'], {[s['header--inside-page']]: type})}>
			<h1>Интернет магазин</h1>
		</div>
	);
}

export default Header;
