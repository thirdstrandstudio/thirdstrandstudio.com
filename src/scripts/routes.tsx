// routes.ts
import { RouteRecord } from 'vite-react-ssg';
import Homepage from '../pages/Homepage';
import Contact from '../pages/Contact';
import AboutUs from '../pages/AboutUs';
import Software from '../pages/services/[service]';

const routes: RouteRecord[] = [
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about-us',
    element: <AboutUs />,
  },
  {
    id: 'code',
    path: '/code/:code',
    lazy: () => import('../pages/code-page/[code]'),
  },
  {
    id: 'caseStudy',
    path: '/case-studies/:caseStudy',
    lazy: () => import('../pages/case-studies/[caseStudy]'),
  },
  {
    id: 'services',
    path: '/services/:service',
    lazy: () => import('../pages/services/[service]'),
  }
];

export default routes;
