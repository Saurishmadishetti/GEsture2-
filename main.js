Webcam.set({
    width:250,
    height:200,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("cam");
Webcam.attach("#cam");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("re_cam").innerHTML="<img id='resulted_img' src='" + data_uri + "'>"; 
    });
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8Ql8MH9hd/ml5.json",modelLoaded);
function modelLoaded(){
    console.log("model is loaded");
};