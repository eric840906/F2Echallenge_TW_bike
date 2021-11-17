import React from 'react'
import { Loading } from 'Components/Loading'
import { HomePage } from 'Pages'
import { Navigate } from 'react-router-dom'
const BikePage = React.lazy(() => import('../Pages/BikePage'))
const SpotPage = React.lazy(() => import('../Pages/SpotPage'))
const DetailPage = React.lazy(() => import('../Pages/DetailPage'))
const CityPage = React.lazy(() => import('../Pages/CityPage'))

const routes = [
  {
    path: '/',
    name: '首頁',
    exact: true,
    element: <HomePage />
  },
  {
    path: '/nearbybike',
    name: '首頁',
    exact: true,
    element: (
      <React.Suspense fallback={<Loading />}>
        <BikePage />
      </React.Suspense>
    )
  },
  {
    path: '/scenicspots/:place',
    name: '旅遊景點',
    exact: true,
    element: (
      <React.Suspense fallback={<Loading />}>
        <SpotPage />
      </React.Suspense>
    )
  },
  {
    path: '/:target/detail/:id',
    name: 'spotInfo',
    exact: true,
    element: (
      <React.Suspense fallback={<Loading />}>
        <DetailPage />
      </React.Suspense>
    )
  },
  {
    path: '/cities',
    name: '城市頁面',
    exact: true,
    element: (
      <React.Suspense fallback={<Loading />}>
        <CityPage />
      </React.Suspense>
    )
  },
  {
    path: '*',
    element: <Navigate to='/' />
  }
]

export default routes
