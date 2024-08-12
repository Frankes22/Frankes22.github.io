function comprobarclave(){
    let clave1 = document.clave1.value
    let clave2 = document.clave2.value
    
    if (clave1 == clave2)  {
        alert("Las dos claves son iguales")
    } else {
        alert("Las dos claves son distintas")
    }
}