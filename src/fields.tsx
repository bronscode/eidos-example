import React from "react";

import { translate } from "@bronscode/eidos";
import { Fill } from "@bronscode/eidos";

import { UnionField, FieldComponent } from "@bronscode/eidos";
import { AnyField } from "@bronscode/eidos";
import { TextField } from "@bronscode/eidos";
import { BooleanField } from "@bronscode/eidos";
import { StringField } from "@bronscode/eidos";
import { NumberField } from "@bronscode/eidos";
import { IntegerField } from "@bronscode/eidos";

export { AnyField };
export { TextField };
export { BooleanField };
export { StringField };
export { NumberField };
export { IntegerField };

export const TaskField : FieldComponent<Fill<Task, 0>> = ({ value, onChange, editable, label, name, className }) => {
	return (
		<div className={`Field TaskField ${className ?? ""} ${name ?? ""}`}>
			<label>{label ?? translate("Task.@label")}</label>
			<StringField
				label={translate("Task.title")}
				name="title"
				value={value?.["title"]}
				onChange={(title) => onChange!({ title })}
				editable={editable}
			/>
			<TextField
				label={translate("Task.description")}
				name="description"
				value={value?.["description"]}
				onChange={(description) => onChange!({ description })}
				editable={editable}
			/>
			<UnionField
				label={translate("Task.difficulty.@label")}
				labels={translate("Task.difficulty")}
				name="difficulty"
				value={value?.["difficulty"]}
				options={["easy","hard"]}
				onChange={(difficulty: any) => onChange!({ difficulty })}
				editable={editable}
			/>
		</div>
	);
}
TaskField.type = "Task";
TaskField.properties = ["title","description","difficulty"];

export const PersonField : FieldComponent<Fill<Person, 0>> = ({ value, onChange, editable, label, name, className }) => {
	return (
		<div className={`Field PersonField ${className ?? ""} ${name ?? ""}`}>
			<label>{label ?? translate("Person.@label")}</label>
			<StringField
				label={translate("Person.name")}
				name="name"
				value={value?.["name"]}
				onChange={(name) => onChange!({ name })}
				editable={editable}
			/>
			<IntegerField
				label={translate("Person.age")}
				name="age"
				value={value?.["age"]}
				onChange={(age) => onChange!({ age })}
				editable={editable}
			/>
		</div>
	);
}
PersonField.type = "Person";
PersonField.properties = ["name","age"];

