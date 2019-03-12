import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import sessionQuery from './session.query';

export function Session({ children }) {
	return (
		<Query query={sessionQuery}>
			{({ data, error }) => children({ data, error })}
		</Query>
	);
}

Session.propTypes = {
	children: PropTypes.func.isRequired,
};
