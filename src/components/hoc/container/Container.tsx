import React from 'react';
import {
	IPropsWithChildren,
	IPropsWithStylesAndClasses,
} from '../../../core/interfaces/propsInterfaces';
import classes from './container.module.css';

interface IProps extends IPropsWithChildren, IPropsWithStylesAndClasses {}
export const Container = ({ children, externalClasses = [], styles }: IProps) => {
	return (
		<div className={[classes.container, ...externalClasses].join(' ')} style={{ ...styles }}>
			{children}
		</div>
	);
};
