let personnet;
const webcam2 = new Webcam(document.getElementById('wc'));
let isPredicting2 = false;
var personPrediction = 'Single person';

async function loadPersonnet() {
    const personnet = await tf.loadLayersModel('http://127.0.0.1:5000/js/Person/model2.json');
    console.log("Model loaded 2");
    return personnet;
}

async function predict2() {
    console.log("predict person method");
  while (isPredicting2) {
    const predictedClass = tf.tidy(() => {
      const img = webcam2.capture();
      const prediction = personnet.predict(img);
      return prediction.as1D().argMax();
    });
    const classId = (await predictedClass.data())[0];
    var predictionText2 = "";
    switch(classId){
		case 1:
			predictionText2 = "Single person";
			personPrediction = predictionText2;
			break;
		case 0:
			predictionText2 = "Multiple person";
			personPrediction = predictionText2;
//			window.location.replace("complaint/id=".concat("stud1"))
			break;
	}
	// document.getElementById("prediction2").innerText = predictionText2;
	if (predictionText2 === "Multiple person") {
		// alert("Multiple people detected");
		console.log("Multiple people detected");
		$("div.alert-person").remove();
		$.notify(
			{
				icon: "fa fa-bell",
				title: "Multiple People Detected!",
				message:
					"Cheating detected. You can be disqualified if you don't stop.",
				url: "",
			},
			{
				element: "body",
				type: "danger",
				allow_dismiss: !0,
				placement: {
					from: "top",
					align: "center",
				},
				offset: { x: 15, y: 15 },
				spacing: 10,
				z_index: 1080,
				delay: 5000,
				timer: 1000,
				url_target: "_blank",
				mouse_over: !1,
				animate: {
					enter: "animated bounceIn",
					exit: "animated fadeOut",
				},
				template:
					'<div data-notify="container" class="alert alert-person alert-dismissible alert-{0} alert-notify col-6 role="alert"><span class="alert-icon" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">{1}</span> <span data-notify="message">{2}</span></div><button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',
			}
		);
	}
    predictedClass.dispose();
    await tf.nextFrame();
  }
}

function startPredicting2(){
	isPredicting2 = true;
	predict2();
}

function stopPredicting2(){
	isPredicting2 = false;
	predict2();
}

async function init_person(){
	await webcam2.setup();
	personnet = await loadPersonnet();
	// console.log(personnet.summary())
	tf.tidy(() => personnet.predict(webcam2.capture()));	
}

init_person();