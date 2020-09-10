export function makeWhereablePolicy<T>(readFunction: (...args: any) => T[]) {
	return (...args: any) => {
		const variables = args[1].args as Partial<T> | null;
		const result = readFunction(...args);

		if (!variables) return result;

		const filterVariables = Object.entries(variables);
		return result.filter(item => {
			return filterVariables.every(([filterKey, filterValue]) => {
				if (filterValue === undefined) return true;
				const resultValue = item[filterKey as keyof T];
				return resultValue === filterValue;
			})
		});
	}
}