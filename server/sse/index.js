const SSE = require("express-sse");

const sse = new SSE(["server-init: initialized server-sent event"]);

/////////////////////////////////////////////////
// imports Arduino
const Serialport = require('serialport');
const Readline = Serialport.parsers.Readline;
/////////////////////////////////////////////////


let selectedPort;

const selectPort = async () => {
    const ports = await Serialport.list();
    console.log(ports);
    console.log('Select a port to connect to: ');
    ports.forEach((port, index) => {
        console.log(`${index}: ${port.path}`);
    });

    // detect os system
    const os = require('os');
    const platform = os.platform();
    if (platform === 'win32') {
        console.log('Windows');
        console.log('not supported yet')
    } else if (platform === 'darwin') {
        console.log('Mac');
        console.log('not supported yet')
    } else if (platform === 'linux') {
        console.log('Sistema Linux detectado, buscando Arduino');
        if (ports[0].path === '/dev/ttyUSB0') {
            console.log('Se ha detectado un Arduino conectado al puerto: ' + ports[0].path);
            selectedPort = ports[0].path;
        } else {
            const prompt = require("prompt-sync")({ sigint: true });
            console.log(platform);
            const portIndex = await prompt('Enter port number: ');
            selectedPort = ports[portIndex].path;
        }

        console.log(`Conectando al puerto: ${selectedPort}`);
        const port = new Serialport(selectedPort, {
            baudRate: 9600
        });
        // console.log(`Enlace Generado ${port}`);
        // console.log(port);
        return port;

    }
};


selectPort().then((port) => {

    // console.log(`Enlace Generado ${port}`);
    // console.log(port);

    const parser = port.pipe(new Readline({ delimeter: '\r\n' }));

    parser.on('open', function () {
        console.log('connection is opened');
    });

    parser.on('data', function (data) {
        console.log(data);
        sse.send(data);
        // const sse = new SSE(["server-init: initialized server-sent event"]);

    });

    port.on('error', function (err) {
        console.log(err);
    });

});


module.exports = sse;