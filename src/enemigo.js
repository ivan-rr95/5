//creo la clase enemigo a partir de la clase Elemento
class Enemigo extends Elemento {
    constructor(x=0, y=0, velX=1, velY=1){
        super(x,y)
        this.velX = velX
        this.velY = velY

    }
    setMover(){
                //Para el movimiento de las rocas
                this.x = this.x + this.velX
                this.y = this.y + this.velY
                //if's para hacer que las rocas cuando salgan de la pantalla vuelvan a entrar
                if(this.x>window.innerWidth) this.x = 0
                if(this.x<0) this.x = this.x + window.innerWidth
                if(this.y>window.innerHeight) this.y = 0
                if(this.y<0) this.y = this.y + window.innerHeight
                
                this.setPosition()
            }
    //PosicionAleatoria para las rocas        
    setPosicionAleatoria(){
                //window.innerWidth para captar el ancho de pantalla del dom
                const anchoPantalla = window.innerWidth;
                //window.innerHeight para captar el alto de pantalla del dom
                const altoPantalla = window.innerHeight;
                //Math.floor redondea el numero que nos da Math.random, pero para redondear también se puede utilizar Math.ceil
                this.x = Math.floor(Math.random()* anchoPantalla)
                this.y = Math.floor(Math.random()* altoPantalla)     
            }
    //VelocidadAleatoria de las rocas  
    //Utilizamos Math.random que engloba numeros entre el zero y el uno, lo multiplicamos por 20 y lo restamos entre 10, para que nos de un resultado que englobe entre el 10 y el -10
    setVelocidadAleatoria(){
        this.velX = Math.floor(Math.random()* 20) - 10
        this.velY = Math.floor(Math.random()* 20) - 10
    }
    
}
