import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';
import './Button.scss';

interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
    customVariant?: 'primary' | 'secondary' | 'outline';
    rounded?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
    customVariant = 'primary',
    rounded = false,
    className = '',
    children,
    ...rest
}) => {
    const getVariantClass = () => {
        switch (customVariant) {
            case 'secondary':
                return 'btn-secondary';
            case 'outline':
                return 'btn-outline';
            default:
                return 'btn-primary';
        }
    };

    return (
        <AntButton
            className={`${getVariantClass()} ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`}
            {...rest}
        >
            {children}
        </AntButton>
    );
};

export default Button;