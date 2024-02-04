import Dashboard from "../pages/dashboard/Dashboard";
import Settings from "../pages/settings/Settings";


const coreRoutes = [
  {
    path: 'dashboard',
    title: 'admin-dashboard',
    component: Dashboard,
  },
 
  {
    path: 'settings',
    title: 'admin-settings',
    component: Settings,
  },
  // {
  //   path: '/inventory-page/detail-view/:id',
  //   title: 'detail-view',
  //   component: DetailView,
  // },

];

const routesPages = [...coreRoutes];
export default routesPages;
