import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Message.module.scss';

const mockUserId = '1';
/**
 * <Messages />
 * @param {object} data - array of message objects
 */
export function Messages({ data }) {
	if (!Array.isArray(data)) return <div>Fetching Messages...</div>;

	return (
		<div className={styles.messageWrap}>
			{data.map(({ user, content }) => (
				<div
					key={`${JSON.stringify(user)}-${content}`}
					className={classnames(styles.messageLine, {
						[styles.reversed]: user.id !== mockUserId,
					})}>
					<p className={styles.name}>
						{user.firstName} {user.lastName}
					</p>

					<p className={styles.content}>{content}</p>
				</div>
			))}
		</div>
	);
}

Messages.defaultProps = {
	data: [],
};

Messages.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			firstName: PropTypes.string,
			lastName: PropTypes.string,
			content: PropTypes.content,
		})
	),
};
