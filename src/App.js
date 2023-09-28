import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

const USER_TYPES = {
  PUBLIC: "Public User",
  NORMAL_USER: "Normal User",
  ADMIN_USER: "Admin User",
};

const CURRENT_USER_TYPE = USER_TYPES.PUBLIC;

function App() {
  return <div className="App">
    <div>
      {/* we can show links as well based on user types
        if(CURRENT_USER_TYPE == USER_TYPES.PUBLIC){
             <Link to={'/'}>Home</Link> 
        }
      */}
    <Link to={'/'}>Home</Link> &nbsp;&nbsp;
    <Link to={'/user'}>User</Link> &nbsp;&nbsp;
    <Link to={'/admin'}>Admin</Link>
    <div>
      You are Logged in as : {CURRENT_USER_TYPE}
    </div>
    </div>

    <AppRoutes />
  </div>;
}

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicElement>
              <Home />
            </PublicElement>
          }
        ></Route>
        <Route
          path="/user"
          element={
            <UserElement>
              <User />
            </UserElement>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <AdminElement>
              <Admin />
            </AdminElement>
          }
        ></Route>
        <Route path="*" element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

function Home() {
  return <div>Home</div>;
}
function User() {
  return <div>User</div>;
}
function Admin() {
  return <div>Admin</div>;
}

function PublicElement({ children }) {
  return <>{children}</>;
}
function UserElement({ children }) {
  if (
    CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER ||
    CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER
  ) {
    return <>{children}</>;
  } else {
    return <div>You dont have access to this page</div>;
    // return <Navigate to={'/'} /> or
    // return <Navigate to={<h1>Page Not Found </h1>}
  }
}
function AdminElement({ children }) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
    return <>{children}</>;
  } else {
    return <div>You dont have access to this page</div>;
    // return <Navigate to={'/'} /> or
    // return <Navigate to={<h1>Page Not Found </h1>}
  }
}

export default App;
