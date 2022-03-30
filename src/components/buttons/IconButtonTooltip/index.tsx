import React from 'react';
import { Tooltip, IconButton } from "@mui/material";

interface IconButtonInterface {
    onClick(): any;
    tooltipTitle?: string;
    children: JSX.Element;
}

const IconButtonTooltip = ({
    onClick = () => { },
    tooltipTitle = "",
    children,
}: IconButtonInterface) => {

    return (
        <Tooltip title={tooltipTitle} placement="left-start" arrow>
            <IconButton onClick={onClick}>
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default IconButtonTooltip;