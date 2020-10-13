document.getElementById('add').addEventListener('click',total)
function total(){
    document.getElementById('total').innerHTML = +document.getElementById('total').innerHTML +1;
}
document.getElementById('minus').addEventListener('click',total)
function total(){
    document.getElementById('total').innerHTML = +document.getElementById('total').innerHTML -1;
}
