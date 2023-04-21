/*
void setgroups () {
    Serial.begin(9600);
    Serial.println("Iniciando comunicacion serial");
}
void loop () {
    while(Serial.available() > 0) {
        Serial.println(Serial.readString() + "¿estas en casa?");
    }
    delay(500);
}
*/

const { parse } = require('path');
const serialPort = require('serialport');

const port = new serialPort (
    'COM4',
    { baudRate: 9600 }
);

const parser = new serialPort.parsers.Readline();

port.pipe(parser);

parser.on('data', (line) => {
    console.log('El lobo dice: ' + line);
    port.write('Era una vez ');
});