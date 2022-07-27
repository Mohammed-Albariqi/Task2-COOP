var speechRecognition = window.webkitSpeechRecognition

var recognition = new speechRecognition()
recognition.lang = "ar";
var textbox = $("#textbox")

var instructions = $("#instructions")

var content = ''

recognition.continuous = true

// recognition is started

recognition.onstart = function() {

 instructions.text("في انتظار الامر")

}

recognition.onspeechend = function() {

 instructions.text("لا يوجد امر")

}

recognition.onerror = function() {

 instruction.text("حاول مجددًا")

}

recognition.onresult = function(event) {

 var current = event.resultIndex;

 var transcript = event.results[current][0].transcript



 content += transcript
 onChangespeech()
 textbox.val(content)

}

$("#start-btn").click(function(event) {

 recognition.start()

})

textbox.on('input', function() {

 content = $(this).val()

})

