import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreateTripPage from "./pages/createTrip";
import TripDetailsPage from "./pages/tripDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
