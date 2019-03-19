import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Messages.module.scss';

/**
 * <Messages />
 * @param {object} session - current session containing message list
 * @param {string} userId - current logged in user.
 */
export function Messages({ data, userId, error }) {
	const messageContainer = useRef();
	const messageEnd = useRef();

	useEffect(() => {
		messageContainer.current.scrollTop =
			messageContainer.current.scrollHeight;
	}, [data]);

	if (error) return <div>Failed to load messages.</div>;

	return (
		<main ref={messageContainer} className={styles.messageWrap}>
			{data.messages.map(({ user, content }) => (
				<div
					key={`${JSON.stringify(user)}-${content}-${Math.random() *
						10000}`}
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
			<div ref={messageEnd} />
		</main>
	);
}

Messages.defaultProps = {
	userId: '',
	data: {
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
