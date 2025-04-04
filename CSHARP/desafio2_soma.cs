using System;

Console.Write("Digite o primeiro número:");
string valor1 = Console.ReadLine() ?? "0";
Console.Write("Digite o segundo número:");
string valor2 = Console.ReadLine() ?? "0";

int valorNumerico1 = Int32.Parse(valor1);

int valorNumerico2 = Int32.Parse(valor2);

var soma = valorNumerico1 + valorNumerico2; 




Console.Write("SOMA: "+ soma);

