
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
   Serial.println("Hello World!");

}

// the loop function runs over and over again forever
void loop() {
 
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);       
                  // wait for a second
  sayHello();
}

// create a function thar sends a message to the serial port
void sayHello() {

 if(Serial.available() > 0 ){
      char Dato = Serial.read();
      if(Dato == '1')   
        generate8BitsString()
      else if(Dato == '2') 
        generateOnes();
      else if(Dato == '3')
        generateCeros();

  }
}

void generate8BitsString() {
  String bits = "";
  for (int i = 0; i < 8; i++) {
    bits += random(0, 2);
  }
  Serial.println(bits);
}


void generateOnes(){
  String bits = "";
  for (int i = 0; i < 8; i++) {
    bits += 1;
  }
  Serial.println(bits);
}

void generateCeros(){
  String bits = "";
  for (int i = 0; i < 8; i++) {
    bits += 0;
  }
  Serial.println(bits);
}