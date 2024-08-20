import { Suspense, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { RouteNames, publicRoutes, userRoutes, } from '.';
import Loader from '../../UI/Loader/Loader';
import { useAuthStore } from '../store/auth';
import LoginPage from '../../pages/LoginPage/LoginPage';


const AppRouter = () => {
    const loggedIn = useAuthStore(state => state.loggedIn)
    const role = useAuthStore(state => state.role)
    const isLoading = useAuthStore(state => state.isLoading)
    useEffect(()=>{
        console.log(isLoading,role)
    },    [isLoading,role])
    return (
        <Routes>
           <> {console.log(isLoading,role)}</>
            {role == 'user' ?
                <>
                    {userRoutes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<Suspense fallback={<Loader />}><route.element /></Suspense>}
                        />

                    ))
                    }
                    <Route path="*" element={<Navigate to={RouteNames.realEstateSearch} replace />} />
                </>
                :


                publicRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<Suspense fallback={<Loader />}><route.element /></Suspense>}
                    />

                ))

            }
            <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
        </Routes>
    );
};


export default AppRouter;
