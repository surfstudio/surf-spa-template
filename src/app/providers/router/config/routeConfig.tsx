import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, loginRoute, RootRoutes } from '@/shared/const/router/router';
import type { AppRoutesProps } from '@/shared/types/router';

import { RootLayout } from '../../ui/RootLayout';

export const routeConfig: Record<RootRoutes, AppRoutesProps> = {
    [RootRoutes.LOGIN]: {
        path: loginRoute,
        element: <LoginPage />,
    },
    [RootRoutes.ROOT_LAYOUT]: {
        path: '/',
        element: <RootLayout />,
        nestedRoutes: {
            [AppRoutes.MAIN]: {
                path: '/',
                element: <HomePage />,
            },
        },
    },
    [RootRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};
