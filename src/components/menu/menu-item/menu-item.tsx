import React, { useState } from 'react';
import classes from './menu-item.module.css';

interface IProps {
	link: string;
	iconUrl: string;
	title: string;
}

export const MenuItem = ({ link, iconUrl, title }: IProps) => {
	const [isIconLoaded, setIsIconLoaded] = useState(false);

	const isActive = title.toLowerCase() === 'chat';

	return (
		<li className={classes.menu__item} style={{ visibility: isIconLoaded ? 'visible' : 'hidden' }}>
			{isActive && (
				<>
					<div className={[classes.menu__item_active].join(' ')} />
				</>
			)}
			<a className={classes.menu__item_link} href={link}>
				<img
					onLoad={() => setIsIconLoaded(true)}
					className={classes.menu__item_icon}
					src={iconUrl}
					alt=""
				/>
				<span className={classes.menu__item_title}>{title}</span>
			</a>
		</li>
	);
};
