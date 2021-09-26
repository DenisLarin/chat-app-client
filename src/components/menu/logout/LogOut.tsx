import React, { useState } from 'react';
import logoutSvg from './../../../core/assets/images/menu/power.svg';
import classes from './logout.module.css';
export const LogOut = ({ ...props }) => {
	const [isIconLoaded, setIsIconLoaded] = useState(false);
	return (
		<div className={classes.logout} style={{ visibility: isIconLoaded ? 'visible' : 'hidden' }}>
			<img
				onLoad={() => setIsIconLoaded(true)}
				className={classes.logout__icon}
				src={logoutSvg}
				alt=""
			/>
			<span className={classes.logout__title}>Log out</span>
		</div>
	);
};
