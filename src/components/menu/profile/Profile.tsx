import React, { useState } from 'react';
import classes from './profile.module.css';
import userPhoto from './../../../core/assets/images/menu/userPhoto.png';

export const Profile = ({ ...props }) => {
	const [isProfilePhotoLoaded, setIsProfilePhotoLoaded] = useState(false);
	return (
		<div className={classes.profile}>
			<img className={classes.profile__photo} src={userPhoto} alt="" />
			<span className={classes.profile__name}>Henry Jabbawockiez</span>
		</div>
	);
};
