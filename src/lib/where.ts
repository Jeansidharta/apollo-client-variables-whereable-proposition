export function makeWhereablePolicy<T>(readFunction: (...args: any) => T[]) {
	return (...args: any) => {
		/** Variables specified in the query */
		const variables = args[1].args as Partial<T> | null;

		// Executes the function that pull the actual data
		const result = readFunction(...args);

		// If no filter variables were given, no need to filter anything
		if (!variables) return result;

		// This is the filter section. It iterates over every result, and verifies
		// if all of it's properties are equal o the filter's values.
		const filterVariables = Object.entries(variables);
		return result.filter(item => {
			return filterVariables.every(([filterKey, filterValue]) => {
				// Ignore undefined filter values
				if (filterValue === undefined) return true;
				const resultValue = item[filterKey as keyof T];
				return resultValue === filterValue;
			})
		});
	}
}