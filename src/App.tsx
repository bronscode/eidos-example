import { useState } from "react";
import "./App.css";
import { HUD, MenuItem } from "@bronscode/eidos";
import AssignmentIcon from "@mui/icons-material/Assignment";
import GroupIcon from "@mui/icons-material/Group";
import "@bronscode/eidos/dist/index.css";
import TasksPage from "./TasksPage";
import UsersPage from "./UsersPage";

const menu: MenuItem[] = [
  {
    id: "tasks",
    label: "Tasks",
    Icon: AssignmentIcon,
    location: "top",
  },
  {
    id: "users",
    label: "Users",
    Icon: GroupIcon,
    location: "top",
  },
];

function getCurrentPage(page: string) {
  switch (page) {
    case "users":
      return <UsersPage />
      case "tasks":
        default:
      return <TasksPage />
  }
}

function App() {
  const [page, setPage] = useState("users");


  return (
    <HUD
      name="Steven"
      currentPage={page}
      visiblePages={menu.map(x => x.id)}
      menu={menu}
      onLogoClick={() => {}}
      onMenuChange={setPage}
      hideMenu={false}
    >
      {getCurrentPage(page)}
    </HUD>
  );
}

export default App;
