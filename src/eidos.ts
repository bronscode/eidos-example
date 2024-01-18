import { BaseObject, List, Ref, integer, text } from "@bronscode/eidos/dist/eidos_std";

declare global {
	interface Eidos {
		tasks: List<Task>;
		users: List<User>;
	}

	interface Task extends BaseObject {
		title: string;
		description: text;
		difficulty: "easy" | "hard";
		assignees?: List<Ref<User>>;
	}

	interface User extends BaseObject {
		name: string;
		age: integer;
	}
}