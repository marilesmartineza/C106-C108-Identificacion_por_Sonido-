 function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O0gfk4uOv/model.json', modelReady);
 }

 function modelReady(){
    classifier.classify( gotResults );
 }

 function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("resultado").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("precision").innerHTML = 'Precisión:  '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("resultado").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("precision").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        console.log(results[0].label);
        img = document.getElementById("galleta");
        img1 = document.getElementById("helado");
        img2 = document.getElementById("burger");
        img3 = document.getElementById("pizza");

        if (results[0].label == "Aplauso") {
            console.log("se mueve cookie")
            img.src = 'cookie.gif';
            img1.src = 'ice cream.png';
            img2.src = 'burger.png';
            img3.src = 'pizza.png';
        } else if (results[0].label == "Jorge habla") {
            console.log("se mueve ice-cream")
            img.src = 'cookie.png';
            img1.src = 'ice cream.gif';
            img2.src = 'burger.png';
            img3.src = 'pizza.png';
        } else if (results[0].label == "silbido") {
            console.log("se mueve burge")
            img.src = 'cookie.png';
            img1.src = 'ice cream.png';
            img2.src = 'burger.gif';
            img3.src = 'pizza.png';
        } else {
            console.log("se mueve pizza")
            img.src = 'cookie.png';
            img1.src = 'ice cream.png';
            img2.src = 'burger.png';
            img3.src = 'pizza.gif';
        }
    }
 }