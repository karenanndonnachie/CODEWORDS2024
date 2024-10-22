# Merging code
## Most of the time we will need to take two (or more) separate snippets of code and weave or merge them together.
* Copy and paste the code(s) to a text-friendly app (like notes or Atom)
* Find & highlight your functions
* Find & Highlight your variables ==> *you must not use the same name for more than one thing*
* Make sure there are NO DUPLICATE FUNCTIONS --> YOU CAN ONLY HAVE ONE setup() and one loop() function
* Make your if else statements talk to each other
<br/>
## Let's try it!
We will merge our 'Blink' sketch and a 'Fade' sketch
### Blink (flashes built-in LED):
<pre>
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);                       // wait for a second
}
</pre>
### Fade (fades an LED on pin 9):
<pre>

int led = 9;           // the PWM pin the LED is attached to
int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup() {
  pinMode(led, OUTPUT);
}

void loop() {
  analogWrite(led, brightness);
  brightness = brightness + fadeAmount;
  if (brightness <= 0 || brightness >= 255) {
    fadeAmount = -fadeAmount;
  }
  delay(30);
}
</pre>
& merged
<pre>
#include <Servo.h>
Servo myservo;  
int pos = 0; // variable to store the servo position

const int ledPin =  LED_BUILTIN;
int ledState = LOW; 
unsigned long previousMillis = 0;        
const long interval = 1000; 
        
void setupBlink() {
  pinMode(ledPin, OUTPUT);
}
void setup() {
  myservo.attach(9);
  setupBlink();
}

void loopBlink() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    if (ledState == LOW) {
      ledState = HIGH;
    } else {
      ledState = LOW;
    }
    digitalWrite(ledPin, ledState);
  }
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { 
    myservo.write(pos);
    loopBlink();              
    delay(5); 
  }
  
for (pos = 180; pos >= 0; pos -= 1) { 
    myservo.write(pos); 
    loopBlink();
    delay(5);
  }
}
    </pre>
[This extended tutorial](https://en.wikiversity.org/wiki/Arduino_Sketch_Merge) can explain in more detail.

