import React from 'react';
import { Page } from '../../components/hoc/page/Page';
import { Wrapper } from '../../components/hoc/wrapper/Wrapper';
import { Container } from '../../components/hoc/container/Container';
import classes from './chatPage.module.css';
import { Menu } from '../../components/menu/Menu';

export const ChatPage = ({ ...props }) => {
	return (
		<Page externalClasses={[classes.chat_page]}>
			<Container externalClasses={[classes.container]}>
				<Wrapper externalClasses={[classes.wrapper]}>
					<>
						<div className={classes.chat}>Content</div>
					</>
				</Wrapper>
			</Container>
		</Page>
	);
};
