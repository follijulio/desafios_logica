def getIdade(e):
    return e['idade']

def main():
    
    objetos = [
    {"nome": "Ana", "idade": 25},
    {"nome": "Bruno", "idade": 20},
    {"nome": "Carlos", "idade": 30}
    ]
    
    print("ANTES: ",objetos)
    objetos.sort(key=getIdade)
    print("DEPOIS: ",objetos)
    
if __name__ == "__main__":
    main()