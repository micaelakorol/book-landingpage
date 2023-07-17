import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Easy from "../pages/Easy";
import Simple from "../pages/Simple";
import Speedy from "../pages/Speedy";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Simple />} />
      <Route path="/speedy" element={<Speedy />} />
      <Route path="/easy" element={<Easy />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);
