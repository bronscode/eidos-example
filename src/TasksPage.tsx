import { EditableTable, Page, endpoints, useAwait, useResource } from "@bronscode/eidos";
import { TaskField } from "./fields";
import "./TasksPage.css";

export default function TasksPage() {
  const [tasks, controller] = useResource(endpoints.tasks);
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