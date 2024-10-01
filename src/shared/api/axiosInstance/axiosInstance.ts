import axios from 'axios';

import { ACCESS_TOKEN } from '@/shared/const/localstorage/localstorage';
import { persistStorage } from '@/shared/lib/persist-storage/persist-storage';

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ${persistStorage.getItem<string>(ACCESS_TOKEN) || ''}`;
    }

    return config;
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            return axiosInstance(originalRequest);
        }

        throw error;
    },
);
