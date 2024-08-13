import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom"

import { DataProvider } from "./context/DataContext";

import RootLayout from "./layouts/RootLayout"
import Error from "./routes/Error"
import Trips from "./routes/Trips"
import Deliveries from "./routes/Deliveries"
import Drivers from "./routes/Drivers"
import Trucks from "./routes/Trucks"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route path="viagens" element={<Trips />}/>
      <Route path="entregas" element={<Deliveries />} />
      <Route path="motoristas" element={<Drivers />} />
      <Route path="caminhoes" element={<Trucks />} />
    </Route>
  )
)

export default function App() {
  return (
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  )
}
