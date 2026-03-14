function contarOcorrencias<T>(array: T[],elemento: T): number {
 let contador = 0

 for (const item of array){
    if (item === elemento){
        contador += 1
    }
 }
 return contador
}
