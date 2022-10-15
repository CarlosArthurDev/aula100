




Webcam.set({
    width: 320,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();


function inicio(){
    document.getElementById("textarea").innerHTML=""
    recognition.start
}

var camera= document.getElementById("camera")

Webcam.set({
    width: 320,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
 });

 function tiraselfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captura" src="'+data_uri+'"/>'
    })

 }

 function temp(cont){
    for(var i=0;i<8;i++){
        cont = cont+1
        var synth = window.speechSynthesis;
  
        speak_data = cont ;
  
       var utterThis = new SpeechSynthesisUtterance(speak_data);
  
        synth.speak(utterThis);
   
    }
   
  
 }
 
 
 function save(){
    var link=document.getElementById("link");
    image=document.getElementById("captura").src;
    link.href=image;
    link.click()
    
}

