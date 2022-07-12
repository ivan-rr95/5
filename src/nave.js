//Creamos una clase nueva llamada Nave que es una extensión de la clase Elemento
class Nave extends Elemento{
    constructor(x=400, y=400, velX=5, velY=5){
        super(x,y)
        this.velX = velX
        this.velY = velY

    }
    //La función mover tendra la tarea de detectar el moviento de las teclas del teclado. Usamos'if(key.code == 'Arrow')' para poder lograrlo. 
    setMoverNave(){
        document.addEventListener('keydown', (key)=>{
            //console.log(key.code)
            if(key.code == 'ArrowUp') this.y = this.y - this.velY
            if(key.code == 'ArrowDown') this.y = this.y + this.velY
            if(key.code == 'ArrowLeft') this.x = this.x - this.velX
            if(key.code == 'ArrowRight') this.x = this.x + this.velX

            //console.log(this.x)
            this.setPosition()
            //this.setColor()
            
        })  
    }
    //sirve para llamar varias funciones dentro de la misma función
    setIni(){
        this.setUI()
        this.setPosition()
        this.setVisible()
    }
    setPintaNave(){
        this.UI.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/1945/1945907.png')";
        this.UI.style.backgroundSize = "cover"
        this.UI.style.backgroundColor = 
        this.UI.style.width = 
        console.log(this.UI)  
    }
    // mover(){
    //     //control colisiones
    //     var caso1 = false;
    //     var caso2 = false
    //     const frames = setInterval(()=>{   
    //         this.nave.setMover()
    //         this.arrayEnemigos.forEach(roca => {
    //             roca.setMover()
    //             //Comprobamos posible colisión con todas las rocas
    //             caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y; 

    //             caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y;

    //             // if((caso1 || caso2) && this.nave.estado == 'vivo'){
    //             //     this.vidas--
    //             //     document.querySelector('.numVidas').innerHTML = this.vidas;
    //             //     console.log(this.vidas);
    //             //     this.nave.muerto()
    //             // }
    //         });            
    //     }, 50)
    // }

}
