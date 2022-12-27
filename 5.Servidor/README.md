# Servidor

El servidor es una aplicación web desarrollada en Node.js, que se encarga de recibir los datos del Arduino y mostrarlos en una interfaz web.

## Ejecución

Para ejecutar el servidor, se debe tener instalado Node.js y npm.

Para instalar las dependencias, se debe ejecutar el siguiente comando:

```bash
npm install
```


Para ejecutar el servidor, se debe ejecutar el siguiente comando:

```bash
npm start
```


## Comunicación con el Arduino

El servidor se comunica con el Arduino mediante el puerto serial, para esto se utiliza la librería [serialport](https://www.npmjs.com/package/serialport). El SerialPort es un objeto que se encarga de la comunicación con el puerto serial, para esto se debe especificar el puerto y la velocidad de comunicación. Para este ejemplo se utiliza el puerto `/dev/ttyACM0` y una velocidad de 9600 baudios. 

```javascript 
const SerialPort = require('serialport');
const port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
});
```
