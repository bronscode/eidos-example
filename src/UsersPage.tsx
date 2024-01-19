import { EditableTable, Page, endpoints, useAwait, useResource } from "@bronscode/eidos";
import { UserField } from "./fields";

export default function UsersPage() {
  const [users, controller] = useResource(endpoints.users);
  useAwait(users);

  return <Page title="Users">
    <EditableTable
      title="Users"
      values={users}
      controller={controller}
      DisplayComponent={UserField}
      EditComponent={UserField}
      emptyText="No users found."
      emptyValue={{}}
    />
  </Page>;
}