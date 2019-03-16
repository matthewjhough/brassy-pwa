import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { UserContext } from '../User/userContext';
import styles from './Messages.module.scss';

/**
 * <Messages />
 * @param {object} data - array of message objects
 */
export function Messages({ data }) {
	const { id: userId } = useContext(UserContext);
	if (!Array.isArray(data)) return <div>Fetching Messages...</div>;

	return (
		<main className={styles.messageWrap}>
			{data.map(({ user, content }) => (
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
