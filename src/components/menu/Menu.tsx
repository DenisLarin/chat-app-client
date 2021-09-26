import React from 'react';
import classes from './menu.module.css';
import { MenuItemsArray } from '../../core/constants/menu';
import { MenuItem } from './menu-item/menu-item';
import { Profile } from './profile/Profile';
import { LogOut } from './logout/LogOut';

export const Menu = ({ ...props }) => {
	const menuItems = MenuItemsArray.map(item => {
		return <MenuItem key={item.title} link={item.link} iconUrl={item.icon} title={item.title} />;
	});
	return (
		<div className={classes.menu}>
			<div className={classes.menu__content}>
				<div className={classes.menu__profile}>
					<Profile />
				</div>
				<nav className={classes.menu__navigation}>
					<ul className={classes.menu__navigation_ul}>{menuItems}</ul>
				</nav>
				<LogOut />
			</div>
		</div>
	);
};
