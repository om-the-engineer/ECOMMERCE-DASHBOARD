import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//import Dashboard from "./pages/dashboard";
//conventional way of importing pages.

import { lazy, Suspense } from "react";
//import lazy function and suspense component  convention method

import Loader from "./components/Loader";

//using lazy function
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transactions = lazy(() => import("./pages/Transactions"));
const NewProduct = lazy(() => import("./pages/management/NewProduct"));
const ProductManagement = lazy(() => import("./pages/management/ProductManagement"));
const TransactionManagement = lazy(() => import("./pages/management/TransactionManagement"));
const BarCharts = lazy(() => import("./pages/charts/BarCharts"));
const PieCharts = lazy(() => import("./pages/charts/PieCharts"));
const LineCharts = lazy(() => import("./pages/charts/LineCharts"));
const Stopwatch = lazy(() => import("../src/pages/apps/Stopwatch"));
const Coupon = lazy(() => import("../src/pages/apps/Coupon"));
const Toss = lazy(() => import("../src/pages/apps/Toss"));


// |^ above 2 lines for loading all the pages at a time using "lazy"



const App = () => {
  return <Router>
    <Suspense fallback={<Loader />}>
      <Routes>

      <Route
            path="/"
            element={
              <Link to="/admin/dashboard">
                <button>Visit Dashboard</button>
              </Link>
            }
          />

        {/* Sidebar Navigations*/}
        <Route path="admin/dashboard" element={<Dashboard />} />;
        <Route path="admin/product" element={<Products />} />;
        <Route path="admin/customer" element={<Customers />} />;
        <Route path="admin/transaction" element={<Transactions />} />;

        {/* Charts */}
        <Route path="admin/chart/bar" element={<BarCharts />} />
        <Route path="admin/chart/pie" element={<PieCharts />} />
        <Route path="admin/chart/line" element={<LineCharts />} />

        {/* Apps */}

        <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
        <Route path="/admin/app/coupon" element={<Coupon />} />
        <Route path="/admin/app/toss" element={<Toss />} />


        {/*  Managements Under Dashboard : Add Product, manage product, manage transaction*/}

        {/* This new route should be placed first for working */}
        <Route path="/admin/product/new" element={<NewProduct />} />

        {/* : represent dynamic route id */}
        <Route path="/admin/product/:id" element={<ProductManagement />} />

        {/* Route for transaction */}
        <Route path="/admin/transaction/:id" element={<TransactionManagement />} />


      </Routes>


    </Suspense>
  </Router>;
};

export default App;