import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Easy from "../Pages/Easy";
import Simple from "../Pages/Simple";
import Speedy from "../Pages/Speedy";

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
