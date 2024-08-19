/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import "./ProvidersHome.css";
import axios from "axios";
import MiniCardProviders from "./MiniCardProvider/MiniCardProvider";

function ProvidersHome(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationAvailable, setLocationAvailable] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: null, lon: null });

  useEffect(() => {
    const obtenerUbicacion = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocationAvailable(true);
            setCoordinates({ lat: latitude, lng: longitude });
            // Agrega el console.log para verificar las coordenadas
            console.log("Coordenadas del usuario:", {
              lat: latitude,
              lng: longitude,
            });
          },
          () => setLocationAvailable(false)
        );
      } else {
        setLocationAvailable(false);
      }
    };

    obtenerUbicacion();
  }, []);

  useEffect(() => {
    const cargarDatos = async () => {
      const urlProviders = locationAvailable
        ? `http://localhost:8080/proveedoresCercanos`
        : `http://localhost:8080/buscar?query=`;

      try {
        const response = await axios.get(urlProviders);
        if (response.status === 200) {
          let providers = response.data;

          // Filtrar proveedores con imágenes
          providers = providers.filter((provider) => provider.imagenes && provider.imagenes.length > 0);

          if (!locationAvailable) {
            // Seleccionar 4 proveedores aleatorios si no se obtuvo la ubicación
            providers = providers.sort(() => 0.5 - Math.random()).slice(0, 4);
          } else {
            // En caso de que la ubicación esté disponible, usa todos los proveedores cercanos
            providers = providers.slice(0, 4);
          }

          setData(providers);
          console.log(urlProviders);
          console.log(providers);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    cargarDatos();
  }, [locationAvailable, coordinates]);

  return (
    <>
      <Box
        className="box-providers-home"
        sx={{
          backgroundColor: "customColors.verde",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={1}>
          {data.map((elem, i) => {
            return (
              <Grid item key={i} xs={6}>
                <MiniCardProviders
                  category={elem.categoria.nombre}
                  image={elem.imagenes[0].url}
                  nameProvider={elem.nombre}
                  typeProvider={elem.tipoProveedor}
                  ciudad={elem.ciudad}
                  provincia={elem.provincia.nombre}
                  pais={elem.pais.nombre}
                  description={elem.descripcion}
                  email={elem.email}
                  facebook={elem.facebook}
                  instagram={elem.instagram}
                  telefono={elem.telefono}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default ProvidersHome;
