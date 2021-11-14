import React from 'react'
import { Loading } from 'Components/Loading'
import { HomePage } from 'Pages'
import { Navigate } from 'react-router-dom'
const SpotPage = React.lazy(() => import('../Pages/SpotPage'))
const DetailPage = React.lazy(() => import('../Pages/DetailPage'))
const RestaurantPage = React.lazy(() => import('../Pages/RestaurantPage'))

const routes = [
  {
    path: '/',
    name: '首頁',
    exact: true,
    element: <HomePage />
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
    path: '/restaurants/main/:place/:classify',
    name: '美食餐廳',
    exact: true,
    element: (
      <React.Suspense fallback={<Loading />}>
        <RestaurantPage />
      </React.Suspense>
    )
  },
  {
    path: '*',
    element: <Navigate to="/" />
  }
]

export default routes
