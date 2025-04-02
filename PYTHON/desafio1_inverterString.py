def inverter(palavra):
    array = list(palavra)
    array.reverse()
    palavraInvertida = "".join(array)
    return palavraInvertida


def main():
    palavra = "abc"
    palavraInvertida = inverter(palavra)
    
    print("STRING INICIAL:" , palavra)
    print("STRING FINAL: ", palavraInvertida)


if __name__ == "__main__":
    main()