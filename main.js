const constraints = 
{
    video: true
};


navigator.mediaDevices.getUserMedia(constraints)
    .then(function(stream) {
        const video = document.querySelector('video');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
            video.play();
        };
    })
    .catch(function(err) {
        console.log('Erro ao acessar a webcam: ', err);
    });


function captureImage() {
    const canvas = document.createElement('canvas');
    const video = document.querySelector('video');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageDataURL = canvas.toDataURL('image/jpeg');
    return imageDataURL;
}


const modelURL = 'https://teachablemachine.withgoogle.com/models/SYgT3SOWV/';

const model = ml5.imageClassifier(modelURL, function() {
    console.log('Modelo carregado com sucesso.');

    const modelURL = 'const modelURL = https://teachablemachine.withgoogle.com/models/SYgT3SOWV/';
});



