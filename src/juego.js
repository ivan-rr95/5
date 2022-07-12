//Funcion para mover cosas
function moverRocas(){
    const frames = setInterval(() =>{
        //console.log(enemigo1.x)
        enemigo1.setMover()
        enemigo2.setMover()
        enemigo3.setMover()
        enemigo4.setMover()
    
    }, 70)//mili segundos a los que se mueve
}
moverRocas()





// class Juego{
//     constructor()
// }



// class Juego{
//     constructor(numEnemigos=5){
//         this.numEnemigos = numEnemigos
//         this.arrayEnemigos = []
//         this.nave = new Nave(300,300,10,10)
//         this.nave.setInit()
//     }
//     //Funciobn para mover cosas
//     mover(){
//         var caso1 = false;
//         var caso2 = false
//         const frames = setInterval(()=>{   
//             this.arrayEnemigos.forEach(roca => {
//                 roca.setMover()
//                 //this.colision(roca)
//                 console.log(roca.x);
//                 caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y; 

//                 caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y;

//                 if(caso1 || caso2 && this.nave.estado == 'vivo'){
//                     this.nave.muerto()
//                 }  
//             });            
//         }, 100)
//     }
//     setEnemigos(){
//         for(let i=0;i<this.numEnemigos;i++){
//             this.arrayEnemigos.push(new Enemigo())
//             this.arrayEnemigos[i].setInit()
//         }
//     }
//     colision(roca){ 
//         const caso1 = this.nave.x + this.nave.ancho > roca.x && this.nave.x < roca.x && this.nave.y + this.nave.alto > roca.y && this.nave.y < roca.y 

//         const caso2 = this.nave.x < roca.x +  roca.ancho && this.nave.x + this.nave.ancho > roca.x && this.nave.y < roca.y + roca.alto && this.nave.y + this.nave.alto > roca.y

//         if(caso1 || caso2){
//             this.nave.UI.classList.add('colision')
//         }
//         else{
//             this.nave.UI.classList.remove('colision')
//         }
        
//     }
//     play(){
//         this.setEnemigos()
//         this.mover()
//     }
//     moverRocas(){
//         const frames = setInterval(() =>{
//             //console.log(enemigo1.x)
//             enemigo1.setMover()
//             enemigo2.setMover()
//             enemigo3.setMover()
//             enemigo4.setMover()
            
//         }, 70)
//     }
//     setIni2(){}
// }