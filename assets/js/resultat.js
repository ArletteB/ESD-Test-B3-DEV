let result = document.getElementById('result')

if(sessionStorage.getItem('1') == "win"){
   result.innerHTML = "Bravo😍😍 vous êtes sur la bonne voix💪 !"
    result.style.backgroundColor = "green"
}else{
    result.innerHTML = "Dommage vous avez perdu💔! Réeesez"
    result.style.backgroundColor = "red"
}