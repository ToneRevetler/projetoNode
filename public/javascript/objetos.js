const objetoList = []

function adicionaObjeto(){

    const AddObjeto = {
        name: '',
        price: 0,
        description: ""
    };

    objetoList.push(AddObjeto);
    console.log(objetoList);
}

function teste(){
    console.log(objetoList);
    document.querySelector('#testeID').textContent = "O BRUNO CURTE JIROMBA"
}

teste();