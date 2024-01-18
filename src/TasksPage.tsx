import { EditableTable, Page, endpoints, useAwait, useSave } from "@bronscode/eidos";
import { TaskField } from "./fields";

export default function TasksPage() {
  const [tasks, controller] = useSave(endpoints.tasks);
  useAwait(tasks);

  return <Page title="Tasks">
    <EditableTable
      title="Tasks"
      values={tasks}
      controller={controller}
      DisplayComponent={TaskField}
      EditComponent={TaskField}
      emptyText="No tasks found."
      emptyValue={{}}
    />
  </Page>;
}