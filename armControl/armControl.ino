void setup(){
  Serial.begin(57600);
  
  // Two electrode par outputs
  pinMode(6,OUTPUT);
  pinMode(5,OUTPUT);
  
  // LED outputs for Leap Motion position confirmation
  pinMode(4,OUTPUT);
  pinMode(2,OUTPUT);
  
  Serial.println(1);
}

void loop(){
  if(Serial.available()>=2){
    
    int val1 = Serial.read();
    int val2 = Serial.read();
    
    while(Serial.available()){
      char temp = Serial.read();
    }
    
    analogWrite(6,val1);
    analogWrite(5,val1);
    
    if(val2!=0){
      digitalWrite(2,HIGH);
      digitalWrite(4,LOW);
    }
    else{
      digitalWrite(2,LOW);
      digitalWrite(4,HIGH);
    }   
    Serial.println(1);
  }
}
