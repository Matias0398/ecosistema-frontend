export const fields = [
  {
    id: "Nombre",
    label: "Nombre de la Organización*",
    helperText: "Se visualizará en el título de la publicación",
    type: "text",
  },
  {
    id: "Descripcion",
    label: "Breve descripción del Producto/Servicio*",
    helperText: "Se visualizará en el subtítulo de la publicación 0/50",
    type: "text",
  },
  {
    id: "Categoria",
    label: "Categoría*",
    helperText: "Seleccioná la categoría de tu Producto/Servicio",
    type: "select",
    options: [
      { id: 1, label: "Bienestar" },
      { id: 2, label: "Capacitaciones" },
      { id: 3, label: "Construcción" },
      { id: 4, label: "Cultivos" },
      { id: 5, label: "Gastronomía" },
      { id: 6, label: "Indumentaria" },
      { id: 7, label: "Merchandising" },
      { id: 8, label: "Muebles/Deco" },
      { id: 9, label: "Reciclaje" },
      { id: 10, label: "Tecnología" },
      { id: 11, label: "Transporte" },
    ],
  },
  {
    id: "Correo",
    label: "Correo electrónico*",
    helperText: "El mismo con el que te registraste o uno diferente",
    type: "text",
  },
  {
    id: "Telefono",
    label: "Teléfono o Whatsapp*",
    helperText: "Con el siguiente formato +54 9 261 002 002",
    type: "text",
  },
  {
    id: "Instagram",
    label: "Instagram*",
    helperText: "Podés pegar el link de tu perfil",
    type: "text",
  },
  {
    id: "Facebook",
    label: "Facebook*",
    helperText: "Podés pegar el link de tu perfil",
    type: "text",
  },
  {
    id: "País",
    label: "País*",
    helperText: "Seleccioná un País de la lista",
    type: "select",
    options: [
      { id: 1, label: "Argentina" },
      { id: 2, label: "Chile" },
      { id: 3, label: "Colombia" },
      { id: 4, label: "Uruguay" },
    ],
  },
  {
    id: "Provincia",
    label: "Provincia/Estado*",
    helperText: "Seleccioná un Provincia/Estado de la lista",
    type: "select",
    options: [
      { id: 1, label: "Buenos Aires" },
      { id: 2, label: "Córdoba" },
      { id: 3, label: "Mendoza" },
      { id: 4, label: "San Luis" },
    ],
  },
  {
    id: "Ciudad",
    label: "Ciudad*",
    helperText: "Sin abreviaturas, nombre completo",
    type: "text",
  },
  {
    id: "Descripcion del producto",
    label: "Descripción del Producto/Servicio*",
    helperText: "Máximo 300 caracteres 0/300",
    type: "text",
  },
];