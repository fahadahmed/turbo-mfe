import { Suspense, lazy } from 'react'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router"

import './App.css'

const StaffList = lazy(() => import('./pages/Staff'))
// const CreateStaff = lazy(() => import('staffApp/CreateStaff'))
const StaffDetails = lazy(() => import('./pages/$StaffId'))

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>{" "}
        <Link to="/staff">Staff</Link>{" "}
      </div>
      <Outlet />
    </>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <h1>Remote App</h1>
});

const staffRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "staff",
});

const viewAllStaffRoute = createRoute({
  getParentRoute: () => staffRootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <StaffList />
    </Suspense>
  )
});

const viewStaffRoute = createRoute({
  getParentRoute: () => staffRootRoute,
  path: "$staffId",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <StaffDetails />
    </Suspense>
  )
});

const routeTree = rootRoute.addChildren([indexRoute, staffRootRoute.addChildren([viewAllStaffRoute, viewStaffRoute])]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
