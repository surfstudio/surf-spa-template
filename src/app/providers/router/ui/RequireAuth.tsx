import type { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { ACCESS_TOKEN } from '@/shared/const/localstorage/localstorage';
import { loginRoute } from '@/shared/const/router/router';
import { persistStorage } from '@/shared/lib/persist-storage/persist-storage';

interface RequireAuthProps {
    children: ReactNode;
}

export function RequireAuth({ children }: RequireAuthProps) {
    const location = useLocation();
    const hasAccessToken = persistStorage.checkHasItem(ACCESS_TOKEN);

    if (!hasAccessToken) {
        return <Navigate to={loginRoute} state={{ from: location }} replace />;
    }

    return children;
}
