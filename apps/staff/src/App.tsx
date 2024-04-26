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
  component: () => <h1>Home</h1>
});

const viewAllStaffRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/staff",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <StaffList />
    </Suspense>
  )
});

const viewStaffRoute = createRoute({
  getParentRoute: () => viewAllStaffRoute,
  path: "$staffId",
  component: () => (
    <Suspense fallback={<div>Loading...</div>}>
      <StaffDetails />
    </Suspense>
  )
});

const routeTree = rootRoute.addChildren([indexRoute, viewAllStaffRoute, viewStaffRoute]);

const router = createRouter({routeTree});

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
