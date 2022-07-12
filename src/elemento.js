class Elemento{
    constructor(x=0, y=0){
        //propiedades
        this.x = x
        this.y = y
        this.UI = ''

    }
    //métodos
    //UI será el elemento del dom que se movera
    setUI() {
        //node es el elemento que quiero clonar //querySelector para atrapar el id
        const node = document.querySelector('#plantilla_elemento')
        //clonamos el div node y lo metemos en la propiedad UI
        this.UI = node.cloneNode(true)
        //lo añadimos al escenario   //El método appendChild() inserta un nuevo nodo dentro de la estructura DOM de un documento, y es la segunda parte del proceso central uno-dos, crear-y-añadir para construir páginas web a base de programación
        document.querySelector('.escenario').appendChild(this.UI)
    }
    //setPosition será para la posicion del elemento del dom
    setPosition(){
        this.UI.style.top = this.y + 'px' //eje y le sumamos 'px' que son pixeles
        this.UI.style.left = this.x + 'px' //eje x le sumamos 'px' que son pixeles
    }
    //Le metemos block para que desparezcan los puntos
    setVisible(){
        this.UI.style.display="block"
    } 
    //sirve para llamar varias funciones dentro de la misma función
    setIni(){
        this.setUI()
        this.setPosition()
        this.setVisible()
    }
    //     this.UI.style.backgroundColor = color 
    setMover(){
        this.x = this.x + 1
        this.y = this.y + 1
        this.setPosition()
    }
}