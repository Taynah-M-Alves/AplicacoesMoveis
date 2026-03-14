function filtrarPares(numeros: number[]): number[] {

  const numerosPares: number[] = []
  for (const numb of numeros){
    
    if (numb%2 == 0) {
        numerosPares.push(numb)
    }
  }
  return numerosPares

}
