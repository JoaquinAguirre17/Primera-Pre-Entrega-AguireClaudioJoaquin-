const productos =
  [
    {
      "imagen": "https://www.macstation.com.ar/img/productos/2765-pink-citrus-case-12-pro-max-rosa-citrico-funda1.jpg",
      "id": 1,
      "titulo": "Funda para iPhone 12",
      "stock": 15,
      "descripcion": "Funda de silicona para iPhone 12, disponible en varios colores.",
      "precio": 1500,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.shiftdigital.com.ar/images/Samsung%20Cargador%20USB%20Tipo%20C%2025W%20EP-TA800XWEGAR%201.jpg",
      "id": 2,
      "titulo": "Cargador Rápido USB-C",
      "stock": 30,
      "descripcion": "Cargador rápido de 20W compatible con la mayoría de dispositivos USB-C.",
      "precio": 2500,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_891602-MLA54931608302_042023-O.webp",
      "id": 3,
      "titulo": "Protector de Pantalla de Vidrio Templado",
      "stock": 50,
      "descripcion": "Protector de pantalla de vidrio templado para varios modelos de smartphones.",
      "precio": 800,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.megga.com.ar/img_fotos_productos/05081106_Flat.jpg",
      "id": 4,
      "titulo": "Soporte para Teléfono para Automóvil",
      "stock": 20,
      "descripcion": "Soporte magnético para teléfono, fácil de instalar en el auto.",
      "precio": 1200,
      "categoria": "electronica"
    },
    {
      "imagen": "https://www.sevenelectronics.com.ar/images/00000000SMW-SW6496478sevenelectronics-Smartwatch-Match100-1.png",
      "id": 5,
      "titulo": "Smartwatch con Monitor de Ritmo Cardíaco",
      "stock": 10,
      "descripcion": "Reloj inteligente con múltiples funciones, incluyendo monitoreo de ritmo cardíaco y notificaciones.",
      "precio": 5500,
      "categoria": "relojes"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_984647-MLA71000580513_082023-O.webp",
      "id": 6,
      "titulo": "Reloj Deportivo Resistente al Agua",
      "stock": 8,
      "descripcion": "Reloj deportivo ideal para actividades al aire libre, resistente al agua hasta 50 metros.",
      "precio": 3800,
      "categoria": "relojes"
    },
    {
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGXTGI_scp4615TdJYznRz3GN1yVmPCUb8Qut7X0w_Q&s",
      "id": 7,
      "titulo": "Vaso Térmico Stanley",
      "stock": 25,
      "descripcion": "Vaso térmico de acero inoxidable, mantiene bebidas calientes o frías por horas.",
      "precio": 4500,
      "categoria": "stanley"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_963234-MLA70394508816_072023-O.webp",
      "id": 8,
      "titulo": "Botella de Agua Stanley",
      "stock": 18,
      "descripcion": "Botella de agua de acero inoxidable, ideal para mantener la hidratación en todo momento.",
      "precio": 3000,
      "categoria": "stanley"
    },
    {
      "imagen": "https://images.fravega.com/f500/0aa254db4c45e365b7e46b0e98fc5155.jpg",
      "id": 9,
      "titulo": "Auriculares Inalámbricos Bluetooth",
      "stock": 40,
      "descripcion": "Auriculares inalámbricos con micrófono integrado y sonido de alta calidad.",
      "precio": 3200,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_661508-MLA73394846261_122023-O.webp",
      "id": 10,
      "titulo": "Power Bank 10,000mAh",
      "stock": 22,
      "descripcion": "Batería portátil de 10,000mAh para cargar tus dispositivos en cualquier lugar.",
      "precio": 2200,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_801688-MLA54621152761_032023-O.webp",
      "id": 11,
      "titulo": "Reloj Inteligente con GPS",
      "stock": 15,
      "descripcion": "Reloj inteligente con GPS integrado y monitor de actividad física.",
      "precio": 6000,
      "categoria": "relojes"
    },
    {
      "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrs4EWkjM0Z6pLpy51OD1MCjnpbRh_bIvO6s2OyRw-DA&s",
      "id": 12,
      "titulo": "Mate Stanley con Bombilla",
      "stock": 30,
      "descripcion": "Mate Stanley de acero inoxidable con bombilla incluida.",
      "precio": 5000,
      "categoria": "stanley"
    },
    {
      "imagen": "https://acdn.mitiendanube.com/stores/105/855/products/diseno-sin-titulo-21-72cc326127e8979db416876066370154-1024-1024.png",
      "id": 13,
      "titulo": "Cafetera de Émbolo Stanley",
      "stock": 10,
      "descripcion": "Cafetera de émbolo Stanley, ideal para preparar café de manera rápida y sencilla.",
      "precio": 6500,
      "categoria": "stanley"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_825117-MLA53455771947_012023-O.webp",
      "id": 14,
      "titulo": "Reloj Inteligente para Niños",
      "stock": 25,
      "descripcion": "Reloj inteligente para niños con juegos educativos y control parental.",
      "precio": 3500,
      "categoria": "relojes"
    },
    {
      "imagen": "https://d22fxaf9t8d39k.cloudfront.net/205bb2caf7e5d708904949ea455e113b19b483b535d9cd4642ed1d0f41155c06289946.png",
      "id": 15,
      "titulo": "Licuadora Portátil Recargable",
      "stock": 20,
      "descripcion": "Licuadora portátil recargable, ideal para preparar batidos en cualquier lugar.",
      "precio": 4000,
      "categoria": "electronica"
    },
    {
      "imagen": "https://matesibarra.com/wp-content/uploads/2021/07/24-dsc-0045_2000-2000_1618860001_ec3.jpg",
      "id": 16,
      "titulo": "Termo Stanley Clásico 1L",
      "stock": 30,
      "descripcion": "Termo Stanley de 1 litro, mantiene las bebidas calientes o frías por horas.",
      "precio": 7000,
      "categoria": "stanley"
    },
    {
      "imagen": "https://www.doiteargentina.com.ar/wp-content/uploads/2019/12/stanley-termo-1-4-litros-classic-verde-46747-01.jpg",
      "id": 17,
      "titulo": "Termo Stanley Classic 1.4L",
      "stock": 12,
      "descripcion": "Termo Stanley Classic de 1.4 litros, con aislamiento al vacío.",
      "precio": 8000,
      "categoria": "stanley"
    },
    {
      "imagen": "https://i.blogs.es/663ac6/base-anker/450_1000.jpg",
      "id": 18,
      "titulo": "Cargador Inalámbrico para Smartphones",
      "stock": 50,
      "descripcion": "Cargador inalámbrico rápido compatible con varios modelos de smartphones.",
      "precio": 3500,
      "categoria": "electronica"
    },
    {
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_724291-MLA47572197956_092021-O.webp",
      "id": 19,
      "titulo": "Reloj Digital Casio",
      "stock": 40,
      "descripcion": "Reloj digital Casio con cronómetro, alarma y resistencia al agua.",
      "precio": 2500,
      "categoria": "relojes"
    }
    
  ]




export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productos)
  })
})

export const getProduct = (id) => {
  return productos.find((prod) => prod.id == id)
}

export const getCategoria = (categoria) => {
  return productos.filter((producto) => producto.categoria == categoria);
};