import { BaseObject, List, Ref, integer, text } from "@bronscode/eidos/dist/eidos_std";

declare global {
	interface Eidos {
		tasks: List<Task>;
		persons: List<Person>;
	}

	interface Task extends BaseObject {
		title: string;
		description: text;
		difficulty: "easy" | "hard";
		assignees?: List<Ref<Person>>;
	}

	interface Person extends BaseObject {
		name: string;
		age: integer;
	}
}