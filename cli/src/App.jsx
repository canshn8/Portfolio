import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Skills from "./pages/Skills";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./component/Layout";
import Project from "./pages/Project";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/skills", element: <Skills /> },
    { path: "/lab", element: <Lab /> },
    { path: "/lab/:projectId", element: <Project /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <Layout>
      <Router>
        <AppRoutes />
      </Router>
    </Layout>
  );
};

export default App;
