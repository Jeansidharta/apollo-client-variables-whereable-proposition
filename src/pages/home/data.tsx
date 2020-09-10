import { gql, useQuery } from "@apollo/client";
import { Todo } from "../../models/todo";

const query = gql`
	query getTodos ($done: Boolean, $name: String) @client {
		Todo (done: $done, name: $name) {
			name
			id
			done
		}
	}
`;

export function useHomeQuery ({ done, name  }: Partial<Todo>) {
	return useQuery<{ Todo: Todo[] }>(query, { variables: { done, name } });
}