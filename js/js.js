setInterval(() => {
    let date = new Date();
    let second=document.getElementById('second').innerHTML=date.getSeconds()
    let minute = document.getElementById('minute').innerHTML=date.getMinutes()
    let hour=document.getElementById('hour').innerHTML=date.getHours()

}, 1000);

function load() {
    let a=document.getElementById('loader')
    a.style.display="none"
}