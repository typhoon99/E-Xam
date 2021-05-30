class Webcam {
  constructor(webcamElement) {
    this.webcamElement = webcamElement;
  }

  capture() {
    return tf.tidy(() => {
      // Reads the image as a Tensor from the webcam <video> element.
      const webcamImage = tf.browser.fromPixels(this.webcamElement);

      const reversedImage = webcamImage.reverse(1);

      const croppedImage = this.cropImage(reversedImage);

      // Expand the outer most dimension so we have a batch size of 1.
      const batchedImage = croppedImage.expandDims(0);

      return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
    });
  }

  cropImage(img) {
    const size = Math.min(img.shape[0], img.shape[1]);
    const centerHeight = img.shape[0] / 2;
    const beginHeight = centerHeight - (size / 2);
    const centerWidth = img.shape[1] / 2;
    const beginWidth = centerWidth - (size / 2);
    return img.slice([beginHeight, beginWidth, 0], [size, size, 3]);
  }

  adjustVideoSize(width, height) {
    const aspectRatio = width / height;
    if (width >= height) {
      this.webcamElement.width = aspectRatio * this.webcamElement.height;
    } else if (width < height) {
      this.webcamElement.height = this.webcamElement.width / aspectRatio;
    }
  }

  async setup() {
    return new Promise((resolve, reject) => {
      navigator.getUserMedia = navigator.getUserMedia ||
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia ||
          navigator.msGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia(
            {video: {width: 224, height: 224}},
            stream => {
              this.webcamElement.srcObject = stream;
              this.webcamElement.addEventListener('loadeddata', async () => {
                this.adjustVideoSize(
                    this.webcamElement.videoWidth,
                    this.webcamElement.videoHeight);
                resolve();
              }, false);
              
            },
            error => {
              reject(error);
            });
      } else {
        reject();
      }
    });
  }
}


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
					delay: 2500,
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
  webcam= await loadWebcam();
  console.log(webcam);
	await webcam.setup();
	console.log("STEP 1 SUCCESS");
	mobilenet = await loadMobilenet();
	// console.log(mobilenet.summary())
	tf.tidy(() => mobilenet.predict(webcam.capture()));
}


