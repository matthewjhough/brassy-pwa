import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './Messages.module.scss';

/**
 * <Messages />
 * @param {object} session - current session containing message list
 * @param {string} userId - current logged in user.
 */
export function Messages({ session, userId }) {
	const messageContainer = useRef();
	useEffect(() => {
		messageContainer.current.scrollTop =
			messageContainer.current.offsetHeight;
	}, []);
	return (
		<main ref={messageContainer} className={styles.messageWrap}>
			{session.messages.map(({ user, content }) => (
				<div
					key={`${JSON.stringify(user)}-${content}`}
					className={classnames(styles.messageLine, {
						[styles.reversed]: user.id !== userId,
					})}>
					<p className={styles.name}>
						{`${user.firstName.charAt(0)}${user.lastName.charAt(
							0
						)}`}
					</p>

					<p className={styles.content}>{content}</p>
				</div>
			))}
		</main>
	);
}

Messages.defaultProps = {
	userId: '',
	session: {
		messages: [],
	},
};

Messages.propTypes = {
	userId: PropTypes.string,
	session: PropTypes.shape({
		messages: PropTypes.arrayOf(
			PropTypes.shape({
				firstName: PropTypes.string,
				lastName: PropTypes.string,
				content: PropTypes.content,
			})
		),
	}),
};
