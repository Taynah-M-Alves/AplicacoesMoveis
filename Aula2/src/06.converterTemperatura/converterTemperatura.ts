type UnidadeTemperatura = "celsius" | "fahrenheit";
function converterTemperatura(valor: number,unidade: UnidadeTemperatura): number {
    if (unidade === 'fahrenheit'){
        return (valor - 32) * 5/9
    }
    if (unidade === 'celsius'){
        return (valor * 9/5) + 32
    }
    return valor

}