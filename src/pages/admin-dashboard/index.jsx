import * as React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import DashboardHeader from './components/DashboardHeader';
import TableCategories from './components/TableCategories';
import BoxVistasPorPublicacion from './components/BoxVistasPorPublicacion';
import ProvidersStatusStatistics from './components/ProvidersStatesStatistics';
import "./Dashboard.css"

export default function DashboardAdministrador() {
    const dataPublication = [
        {
            namePublication: '¿Que es el upciclynga asasa asdada adasd a?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
        {
            namePublication: '¿Que es asdasdad el upciclyng?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
        {
            namePublication: '¿Que esaaaaaaa aaaaa el upciclyng?',
            datePublication: '12/02/2024',
            viewsPublication: 50
        },
    ]

    return(
        <>
            <DashboardHeader />
            <ProvidersStatusStatistics />
            <TableCategories />
            <Box sx={{textAlign: 'center'}}>
                <Typography
                        variant="subtitle"
                        sx={{
                        color: "customColors.negro",
                        fontSize: "20px",
                        lineHeight: "30px",
                        fontWeight: 700,
                        textAlign: "center",
                        marginTop: "110px"
                        }}
                    >
                        Visualizaciones por Publicación
                </Typography>
            </Box>
            {dataPublication.map( (elem, i) =>{
                return(
                <BoxVistasPorPublicacion 
                    key={i}
                    namePublication={elem.namePublication} 
                    datePublication={elem.datePublication}
                    viewsPublication={elem.viewsPublication}
                />)
            })}
        </>
    )
}
