
const $inputs = document.querySelectorAll("[data-number]") as NodeListOf <HTMLInputElement>
const $button = document.querySelector("[data-button]") as HTMLButtonElement | null
const $inputgame = document.querySelector("[data-game]") as  HTMLInputElement


$button?.addEventListener("click", ()=>{
    let Start:boolean = false
    let Empty:boolean = false
    $inputs.forEach((input)=>{
      
        if($inputgame.value != ""){
            const randonnumber:number = Math.random() * 50
            const parcedstring:string = randonnumber.toFixed(2)
     
            input.value = parcedstring
            
            if(input.value === $inputgame.value){
                Start = true
            }
        }else{
         Empty  = true
    
        }
        
        
        
    })

    if(Empty){
        alert("Informe os Numeros para Jogar")  
    }

    if(Start){
        alert("Parabens Você Agora E Um Milionario!!!")
    }else{
        alert("Não Foi Dessa Vez Que Você Ficou Milionário!")
    }
    
   

})
