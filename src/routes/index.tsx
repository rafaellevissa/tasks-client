import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListTasksPage } from "../pages/Tasks";
import { store } from "../store";

const AppRoutes = () => {
  const storage = store.getState();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListTasksPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
