const picture = document.querySelector('.clicker__cookie');
//console.log(picture)
let counter = document.getElementById("clicker__counter").innerHTML;

picture.onclick = () => {
   counter++
   picture.width == 200 ? (picture.width = 300) : (picture.width = 200);
   document.getElementById("clicker__counter").innerHTML = counter;
}
