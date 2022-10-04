var SpeechRecognition = window.webkitSpeechRecognition;
var content = "";
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
content = event.results[0][0].transcript;
    console.log(content);
    if(content=="take my selfie")
    {
        console.log("taking selfie---")
        speak();
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 3 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function()
    {
        take_snapshot();
        save();
    },1000);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },2000);
    setTimeout(function()
    {
        take_snapshot();
        save();
    },3000);
    
}

Webcam.set({
    width : 360,
    height : 250,
    image_format : 'png',
    png_quality : 90
});
camera = document.getElementById("camera");

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(img_id == selfie1)
        {
            document.getElementById(result1).innerHTML = '<img id = "selfie1" src = "'+ data_uri +'"/>';
        }
        if(img_id == selfie2)
        {
            document.getElementById(result2).innerHTML = '<img id = "selfie2" src = "'+ data_uri +'"/>';
        }
        if(img_id == selfie3)
        {
            document.getElementById(result3).innerHTML = '<img id = "selfie3" src = "'+ data_uri +'"/>';
        }
});
}