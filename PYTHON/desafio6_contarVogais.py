def contarVogais(array):
    vogais =["a", "e", "i", "o", "u"]
    resultado = sum(1 for letra in array if letra in vogais)
    return resultado

def main():
    palavra = "aeiou"
    
    array = list(palavra.lower())
    print(contarVogais(array))
    
if __name__ == "__main__":
    main()