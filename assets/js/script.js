let response = []

function valider() {
    sessionStorage.clear();
    var q1= document.getElementById('j').checked
    var q2= document.getElementById('3').checked
    var q3= document.getElementById('n').checked
    var q4= document.getElementById('d').checked
    var q5= document.getElementById('k').checked
    
    
    if(q1 && q2 && q3 && q4 && q5){
        sessionStorage.setItem('1', 'win');
    }


    window.location.href = "./validation.html"
};


