// Arreglos de los pines utilizados
const byte pin[] = {2, 3, 4, 5, 6, 7, 8, 9};
// Declaramos un byte que aumentara de acuerdo a la letura de bits por eso
// se declaro un byte para que solo pueda guardar 8 bits
// arreglo de bits 


void setup()
{
  // Declaramos los pines como entrada en un ciclo for
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("Hello World!");

  Serial.begin(9600);
  for (int i = 0; i < 8; i++)
  {
    pinMode(pin[i], INPUT);
  }
}

void loop()
{
  int pins[8];
  // Leemos los pines con un for
  pins[0] = digitalRead(pin[0]);
  pins[1] = digitalRead(pin[1]);
  pins[2] = digitalRead(pin[2]);
  pins[3] = digitalRead(pin[3]);
  pins[4] = digitalRead(pin[4]);
  pins[5] = digitalRead(pin[5]);
  pins[6] = digitalRead(pin[6]);
  pins[7] = digitalRead(pin[7]);

  // imprimiento los bits en una sola linea
  Serial.print(pins[0]);
  Serial.print(pins[1]);
  Serial.print(pins[2]);
  Serial.print(pins[3]);
  Serial.print(pins[4]);
  Serial.print(pins[5]);
  Serial.print(pins[6]);
  Serial.print(pins[7]);
  Serial.println();
  delay(1500);
}