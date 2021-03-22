![Aerolab](./src/assets/logo.svg "Aerolab")

# Aerolab challenge

Challenge propuesto por Aerolab en el que se debe implementar una tienda por puntos siguiendo las [Especificaciones](#Especificaciones) 

# [Live Demo](https://aerolab-challenge-7311e.web.app/)

# Instalación local

### Clonar repositorio

```
git@github.com:ibejarano/aerolab-challenge.git

cd aerolab-challenge
```

### Instalar dependencias

```
npm install

o

yarn install
```

### (Opcional) Definir una API Key

Reemplazar `your_api_token` en `.env`

```
VITE_API_TOKEN=your_api_token
```

*En caso de no realizar este paso se utilizara una API Key propia.*

### Iniciar servidor local

```
npm run dev

o

yarn dev
```

# Tecnologias utilizadas

- React
- Typescript
- SASS
- Deploy en Firebase
# Especificaciones
### API
Podés encontrar la documentación [acá](https://aerolabchallenge.docs.apiary.io/) y podés obtener una API key [acá](https://aerolab.co/coding-challenge)

## Definición funcional
El usuario tiene una cantidad definida de puntos y cada producto vale una cantidad de puntos especifica.

- [X] Cada producto debe tener un precio en puntos de manera visible.
- [X] El usuario debería poder filtrar los productos por precio, de mayor a menor y vicecersa.
- [X] El usuario debería poder ver cuantos puntos tienen en su cuenta.
- [X] Debería haber una manera clara para el usuario de ver que productos puede comprar y cuales no.
- [x] El botón de comprar debería estar disponible en los productos que el usuario tiene suficientes puntos para comprar.
- [x] Un botón de "comprar ahora" debería mostrarse cuando el usuario interactúa con un producto que puede comprar.
- [x] Cuando el usuario no puede comprar un producto, debería ver cuantos puntos le faltan para poder comprarlo.
- [x] Un usuario no debería poder comprar un producto del cual no tiene suficientes puntos para comprar.
- [x] Cuando el usuario compra, la cantidad de puntos debe ser deducida automaticamente de los puntos disponibles.
- [x] Debe haber una pantalla donde ver el historial de productos canjeados
- [x] No debo poder comprar un producto mientras cargo puntos o estoy comprando otro producto
- [X] Debe haber un máximo de 16 productos en pantalla pero debo poder cambiar de página para ver el resto

## Definiciones técnicas
- [X] La aplicación debe estar publicada y debe ser accesible mediante un link.
- [X] El código de la aplicación debe estar subida a un repositorio de público acceso.
