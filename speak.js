click-to-convert.addEventListener('click',function(){
var speech = true;
window.SpeechRecognition = windowWebkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults= true;

recognition.addEventListener('result',e=>{
    const transcript = Array.from(e.results)
    .maps(result =>result[0])
    .map(result => result.transcript)

    convert_text.innerHTML = transcript;
})


if(speech == true){
    recognition.start();
}

})
