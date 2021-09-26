import React from 'react';
import {
	IPropsWithChildren,
	IPropsWithStylesAndClasses,
} from '../../../core/interfaces/propsInterfaces';
import classes from './page.module.css';
import { Menu } from '../../menu/Menu';
interface IProps extends IPropsWithChildren, IPropsWithStylesAndClasses {}

export const Page = ({ children, externalClasses = [], styles }: IProps) => {
	return (
		<div className={[classes.page, ...externalClasses].join(' ')} style={{ ...styles }}>
			<Menu />
			{children}
		</div>
	);
};
