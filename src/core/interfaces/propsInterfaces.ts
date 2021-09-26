import React from 'react';

export interface IPropsWithChildren {
	children: React.ReactElement;
}
export interface IPropsWithStylesAndClasses {
	externalClasses?: String[];
	styles?: React.CSSProperties;
}
