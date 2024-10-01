import cn from 'classnames';

import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => <div className={cn(cls.PageLoader, {}, [className])} />;
