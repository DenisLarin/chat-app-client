import React from 'react';
import {
	IPropsWithChildren,
	IPropsWithStylesAndClasses,
} from '../../../core/interfaces/propsInterfaces';

import classes from './wrapper.module.css';

interface IProps extends IPropsWithChildren, IPropsWithStylesAndClasses {}

export const Wrapper = ({ children, externalClasses = [], styles }: IProps) => {
	return (
		<div className={[classes.wrapper, ...externalClasses].join(' ')} style={{ ...styles }}>
			{children}
		</div>
	);
};
