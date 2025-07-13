def verificarPrimo(numero):
    if numero < 2:
        return False
    for i in range(2, numero-1):
        if(numero % i == 0):
            return False
    return True

def main():
    numero = 7
    print(verificarPrimo(numero))

if __name__ == "__main__":
    main()