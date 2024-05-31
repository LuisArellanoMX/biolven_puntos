import './App.css';
import AddAsociado from './Components/Asociados/AddAsociado/AddAsociado';
import ListAsociado from './Components/Asociados/ListAsociado/ListAsociado';
import Asociados from './Components/Dashboard/Asosiados/Asociados';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import List_compras from './Components/Dashboard_As/List_compras/List_compras'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import DetailAsociado from './Components/Asociados/DetailAsociado/DetailAsociado';
import SolicitudesAs from './Components/Dashboard_As/SolicitudesAs/SolicitudesAs';
import Solicitudes from './Components/Dashboard/Solicitudes/Solicitudes';
import DetailSolicitud from './Components/Dashboard/DetallesSolicitud/DetailsSolicitud';
import DetailSolicitudAs from './Components/Dashboard_As/SolicitudesAs/DetailSolicitudAs';
import Canjes from './Components/Dashboard_As/Canjes/Canjes';


const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /></div>
  },
  {
    path: '/register',
    element: <div><Register /></div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /></div>
  },
  {
    path: '/asociados',
    element: <div><ListAsociado /></div>
  },
  {
    path: '/asociados/:id_asociado',
    element: <div><DetailAsociado/></div>
  },
  {
    path: '/addAsociado',
    element: <div><AddAsociado /></div>
  },
  {
    path: '/addAsociado/:id_asociado',
    element: <div><AddAsociado /></div>
  },
  {
    path: '/canjes',
    element: <div><Canjes/></div>
  },
  {
    path: '/listcompras',
    element: <div><List_compras/></div>
  },
  {
    path: '/solicitudes',
    element: <div><SolicitudesAs/></div>
  },
  {
    path: '/solicitudesadmin',
    element: <div><Solicitudes/></div>
  },
  {
    path: '/detalles_solicitud/:id_solicitud',
    element: <div><DetailSolicitud /></div>
  },
  {
    path: '/detalles_solicitud_as/:id_solicitud',
    element: <div><DetailSolicitudAs /></div>
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
