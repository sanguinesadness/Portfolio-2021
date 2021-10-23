import React, { FC, ReactNode } from 'react';

interface IPageProps {
    children: ReactNode;
    className?: string;
}

const Page: FC<IPageProps> = ({ children, className }) => {
    return (
        <div className={`page ${className || ""}`}>
            {children}
        </div>
    )
}

export default Page
