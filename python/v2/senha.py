import random
import string
import secrets
from typing import Optional
from dataclasses import dataclass
from enum import Enum

class TipoSenha(Enum):
    SIMPLES = "simples"
    MEDIA = "media"
    FORTE = "forte"
    ULTRA = "ultra"

@dataclass
class ConfigSenha:
    comprimento: int = 14
    incluir_maiusculas: bool = True
    incluir_minusculas: bool = True
    incluir_numeros: bool = True
    incluir_simbolos: bool = True
    numeros_obrigatorios: str = "14"
    excluir_ambiguos: bool = False

class GeradorSenha:
    def __init__(self):
        self.chars_ambiguos = "0OlI1"
        self.simbolos_seguros = "!@#$%^&*()_+-=[]{}|;:,.<>?"
        
    def obter_charset(self, config: ConfigSenha) -> str:
        chars = ""
        
        if config.incluir_minusculas:
            chars += string.ascii_lowercase
        if config.incluir_maiusculas:
            chars += string.ascii_uppercase
        if config.incluir_numeros:
            chars += string.digits
        if config.incluir_simbolos:
            chars += self.simbolos_seguros
            
        if config.excluir_ambiguos:
            chars = ''.join(c for c in chars if c not in self.chars_ambiguos)
            
        return chars
    
    def gerar_senha_customizada(self, config: ConfigSenha) -> str:
        charset = self.obter_charset(config)
        
        if not charset:
            raise ValueError("Nenhum tipo de caractere foi selecionado!")
        
        tamanho_base = config.comprimento - len(config.numeros_obrigatorios)
        if tamanho_base <= 0:
            raise ValueError("Comprimento muito pequeno para incluir números obrigatórios!")
        
        senha_base = [secrets.choice(charset) for _ in range(tamanho_base)]
        
        posicao = secrets.randbelow(len(senha_base) + 1)
        senha_final = senha_base[:posicao] + list(config.numeros_obrigatorios) + senha_base[posicao:]
        
        return ''.join(senha_final)
    
    def gerar_senha_preset(self, tipo: TipoSenha) -> str:
        presets = {
            TipoSenha.SIMPLES: ConfigSenha(
                comprimento=8,
                incluir_simbolos=False,
                excluir_ambiguos=True
            ),
            TipoSenha.MEDIA: ConfigSenha(
                comprimento=12,
                incluir_simbolos=True,
                excluir_ambiguos=True
            ),
            TipoSenha.FORTE: ConfigSenha(
                comprimento=16,
                incluir_simbolos=True,
                excluir_ambiguos=False
            ),
            TipoSenha.ULTRA: ConfigSenha(
                comprimento=24,
                incluir_simbolos=True,
                excluir_ambiguos=False
            )
        }
        
        return self.gerar_senha_customizada(presets[tipo])
    
    def gerar_multiplas_senhas(self, quantidade: int, config: ConfigSenha) -> list[str]:
        return [self.gerar_senha_customizada(config) for _ in range(quantidade)]
    
    def avaliar_forca_senha(self, senha: str) -> dict:
        pontuacao = 0
        criterios = {
            'comprimento': len(senha) >= 12,
            'maiusculas': any(c.isupper() for c in senha),
            'minusculas': any(c.islower() for c in senha),
            'numeros': any(c.isdigit() for c in senha),
            'simbolos': any(c in string.punctuation for c in senha),
            'diversidade': len(set(senha)) / len(senha) > 0.7
        }
        
        pontuacao = sum(criterios.values())
        
        if pontuacao >= 5:
            forca = "🔒 FORTE"
        elif pontuacao >= 3:
            forca = "🔐 MÉDIA"
        else:
            forca = "🔓 FRACA"
            
        return {
            'forca': forca,
            'pontuacao': f"{pontuacao}/6",
            'criterios': criterios
        }

def interface_interativa():
    gerador = GeradorSenha()
    
    print("🔐 GERADOR DE SENHAS AVANÇADO 🔐")
    print("=" * 40)
    
    while True:
        print("\n📋 OPÇÕES:")
        print("1. 🚀 Senha Rápida (preset)")
        print("2. ⚙️  Senha Personalizada")
        print("3. 📊 Avaliar Força de Senha")
        print("4. 🔄 Múltiplas Senhas")
        print("5. 🚪 Sair")
        
        opcao = input("\n👉 Escolha uma opção: ").strip()
        
        try:
            if opcao == "1":
                print("\n🎯 TIPOS DE SENHA:")
                for i, tipo in enumerate(TipoSenha, 1):
                    print(f"{i}. {tipo.value.upper()}")
                
                tipo_escolhido = int(input("\n👉 Escolha o tipo: ")) - 1
                tipos_lista = list(TipoSenha)
                
                if 0 <= tipo_escolhido < len(tipos_lista):
                    senha = gerador.gerar_senha_preset(tipos_lista[tipo_escolhido])
                    print(f"\n✅ Senha gerada: {senha}")
                    
                    avaliacao = gerador.avaliar_forca_senha(senha)
                    print(f"💪 Força: {avaliacao['forca']} ({avaliacao['pontuacao']})")
                else:
                    print("❌ Opção inválida!")
                    
            elif opcao == "2":
                print("\n⚙️ CONFIGURAÇÃO PERSONALIZADA:")
                comprimento = int(input("📏 Comprimento da senha (padrão 14): ") or "14")
                
                config = ConfigSenha(
                    comprimento=comprimento,
                    incluir_maiusculas=input("🔤 Incluir maiúsculas? (s/N): ").lower().startswith('s'),
                    incluir_minusculas=input("🔡 Incluir minúsculas? (S/n): ").lower() != 'n',
                    incluir_numeros=input("🔢 Incluir números? (S/n): ").lower() != 'n',
                    incluir_simbolos=input("🔣 Incluir símbolos? (S/n): ").lower() != 'n',
                    excluir_ambiguos=input("🚫 Excluir caracteres ambíguos? (s/N): ").lower().startswith('s')
                )
                print("\n🔧 Configuração:")
                print(f"Comprimento: {config}")
                
                senha = gerador.gerar_senha_customizada(config)
                print(f"\n✅ Senha gerada: {senha}")
                
                avaliacao = gerador.avaliar_forca_senha(senha)
                print(f"💪 Força: {avaliacao['forca']} ({avaliacao['pontuacao']})")
                
            elif opcao == "3":
                senha_avaliar = input("\n🔍 Digite a senha para avaliar: ")
                avaliacao = gerador.avaliar_forca_senha(senha_avaliar)
                
                print(f"\n📊 AVALIAÇÃO DA SENHA:")
                print(f"💪 Força: {avaliacao['forca']} ({avaliacao['pontuacao']})")
                print("\n📋 Critérios:")
                for criterio, atende in avaliacao['criterios'].items():
                    status = "✅" if atende else "❌"
                    print(f"  {status} {criterio.replace('_', ' ').title()}")
                    
            elif opcao == "4":
                quantidade = int(input("\n🔢 Quantas senhas gerar? "))
                config = ConfigSenha()
                senhas = gerador.gerar_multiplas_senhas(quantidade, config)
                
                print(f"\n📝 {quantidade} SENHAS GERADAS:")
                for i, senha in enumerate(senhas, 1):
                    print(f"{i:2d}. {senha}")
                    
            elif opcao == "5":
                print("\n👋 Até logo!")
                break
                
            else:
                print("❌ Opção inválida!")
                
        except ValueError as e:
            print(f"❌ Erro: {e}")
        except KeyboardInterrupt:
            print("\n\n👋 Saindo...")
            break

def gerar_senha():
    gerador = GeradorSenha()
    config = ConfigSenha()
    return gerador.gerar_senha_customizada(config)

if __name__ == "__main__":
    print("🔐 Senha rápida:", gerar_senha())
    
    print("\n" + "="*50)
    interface_interativa()
