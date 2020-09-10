import { InMemoryCache } from '@apollo/client';

import { fields } from './variables';

export const cache: InMemoryCache = new InMemoryCache({
	typePolicies: {
		Query: {
			fields,
		},
	},
});