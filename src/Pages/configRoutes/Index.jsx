import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../../App";
import Easy from "../Easy";
import Simple from "../Simple";
import Speedy from "../Speedy";

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
