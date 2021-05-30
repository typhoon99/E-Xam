let mobilenet;
const webcam = new Webcam(document.getElementById("wc"));
let isPredicting = false;
var mobilePrediction = "Everything alright";

async function loadMobilenet() {
	console.log("Model function STEP 2");
	const mobilenet = await tf.loadLayersModel(
		"http://127.0.0.1:5000/js/Mobile/model.json"
	);
	console.log("Model loaded");
	return mobilenet;
}

async function predict() {
	console.log("predict mobile method");
	while (isPredicting) {
		const predictedClass = tf.tidy(() => {
			const img = webcam.capture();
			const prediction = mobilenet.predict(img);
			return prediction.as1D().argMax();
		});
		const classId = (await predictedClass.data())[0];
		var predictionText = "";
		switch (classId) {
			case 0:
				predictionText = "Not present";
				mobilePrediction = predictionText;
				break;
			case 1:
				predictionText = "MOBILE detected";
				mobilePrediction = predictionText;
				break;
		}

		// document.getElementById("prediction1").innerText = predictionText;
		if (predictionText === "MOBILE detected") {
			// alert("MOBILE detected");
			console.log(predictionText);
			$("div.alert-mobile").remove();
			$.notify(
				{
					icon: "fa fa-bell",
					title: "Mobile Phone Detected!",
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
						'<div data-notify="container" class="alert alert-mobile alert-dismissible alert-{0} alert-notify col-6 role="alert"><span class="alert-icon" data-notify="icon"></span> <div class="alert-text"</div> <span class="alert-title" data-notify="title">{1}</span> <span data-notify="message">{2}</span></div><button type="button" class="close" data-notify="dismiss" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>',
				}
			);
		}
		predictedClass.dispose();
		await tf.nextFrame();
	}
}

function startPredicting() {
	console.log("Mobile predict");
	isPredicting = true;
	predict();
}

function stopPredicting() {
	isPredicting = false;
	predict();
}

async function init_mobile() {
    //console.log(webcam);
	await webcam.setup();
	console.log("STEP 1 SUCCESS");
	mobilenet = await loadMobilenet();
	// console.log(mobilenet.summary())
	tf.tidy(() => mobilenet.predict(webcam.capture()));
}

init_mobile();