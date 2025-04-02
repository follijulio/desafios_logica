def main():
    k = 100
    fibonacci = [0, 1]
    for i in range(k):
        fibonacci.append(fibonacci[i+1] + fibonacci[i])
    print(fibonacci[k])
    
if __name__ == "__main__":
    main()