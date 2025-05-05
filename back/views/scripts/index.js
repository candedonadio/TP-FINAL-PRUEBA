let a = document.querySelectorAll('.delete-button');
function remover(index){
    const options = {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:a[index].parentElement.parentElement.id,
        })

    }
    fetch('novedades/borrar', options)
    .then(response = response.json())
    .then(data = console.log('1'))
    .catch(error = console.error(error));
}

a.forEach((k,index) => {
 k.addEventListener('click', e => {
   remover(index)
 } )
})