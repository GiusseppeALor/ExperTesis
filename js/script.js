document.getElementById('whatsappButton').addEventListener('click', function() {
    window.location.href = 'https://wa.me/1234567890'; 
});

document.addEventListener('DOMContentLoaded', function () {
    const stepImage = document.getElementById('stepImage');

    const imageMap = {
        step1: "img/a.png",
        step2: "img/a.jpg",
        step3: "img/r.png",
        step4: "img/t.png"
    };

    document.querySelectorAll('.step-box').forEach(box => {
        box.addEventListener('click', function () {
            const stepId = this.id;
            const imgSrc = imageMap[stepId];
            stepImage.src = imgSrc;
        });
    });
});
