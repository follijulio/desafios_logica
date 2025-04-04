void main()
{

    Console.Write("Digite um valor: ");
    int valor = Int32.Parse(Console.ReadLine() ?? "0");
    
    Console.Write("O número " + valor + " é " + isParFuncao(valor));

}

string isParFuncao(int valor)
{

    if (valor % 2 == 0)
    {
        return "par";
    }
    return "ímpar";
}

main();