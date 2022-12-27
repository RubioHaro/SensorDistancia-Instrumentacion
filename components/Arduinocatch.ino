//Arreglos de los pines utilizados
const byte pin[]= {2,3,4,5,6,7,8,9}; 
//Declaramos un byte que aumentara de acuerdo a la letura de bits por eso 
//se declaro un byte para que solo pueda guardar 8 bits
byte estado = 0;

void setup() {
  //Declaramos los pines como entrada en un ciclo for
  Serial.begin(9600);
  for (int i=0; i<8; i++) {
        pinMode(pin[i], INPUT); 
  }
}


void loop() {
  //Leemos los pines con un for
  for (int i=1; i<=8; i++) {
        //(pin[i-1]) & (1<<i) Esto hara que se haga una comparacion AND bit por bit en la posicion del bit indicado
        //Despues al resultado se le hara una comparacion bit a bit de tipo or que se guardara en estado
        estado |= digitalRead(pin[i-1]) & (1<<i);
  }
  Serial.println(estado);
  delay(500);   
}
