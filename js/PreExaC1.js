function ajax(){
    const url ="https://jsonplaceholder.typicode.com/users" 
    id = document.getElementById("id").value;
    axios
    .get(url)
    .then((res)=>{
        mostrar(res.data);
    }) 
    .catch((err)=>{
        console.log("surgió un error"+err);
    })
    function mostrar(data){
        for(item of data){
            if(item.id == id){
                document.getElementById('nombre').value= item.name;
                document.getElementById('nombreUser').value= item.username;
                document.getElementById('email').value= item.email;
                document.getElementById('calle').value= item.address.street;
                document.getElementById('numero').value= item.address.suite;
                document.getElementById('ciudad').value= item.address.city;
        } 
           
        }
    } 
    }

function limp(){
    document.getElementById('id').value = "";
    document.getElementById('nombre').value= "";
    document.getElementById('nombreUser').value= "";
    document.getElementById('email').value= "";
    document.getElementById('calle').value= "";
    document.getElementById('numero').value= "";
    document.getElementById('ciudad').value= "";
}


const btnCargar = document.getElementById('buscar');
btnCargar.addEventListener('click', function(){
    ajax();
})

const btnLimpiar = document.getElementById('limpiar');
btnLimpiar.addEventListener("click",function(){
    limp();
})

