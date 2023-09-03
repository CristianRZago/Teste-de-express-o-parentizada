# Teste-de-express-o-parentizada
Atividade da faculdade

Criado por:
Cristian Rodolfo,
Guilherme Oliveira,
Ruan Patrick

Para testar se uma expressão é bem parentizada, implemente na linguagem Java e utilizando a classe Stack e JOptionPane, o seguinte algoritmo de parentização a seguir:  
1. Criar a pilha de parêntesis P vazia (use um vetor com n posições de tamanho fixo ou um vetor dinâmico). 
2. Criar a função pop(P, sym), que empilha um caractere lido da expressão analisada na pilha P, passando como parâmetro a pilha P e o caractere lido sym. 
3. Criar a função top() que retorna o caractere empilhado, ou seja, o último caractere lido, passando como parâmetro a pilha P e retornando o caractere empilhado no topo da pilha P. 
4. Faça a pilha de parêntesis P vazia. 
5. Para cada caractere sym na expressão (percorrendo da esq. para direita)   repita:   
  5.1  Se sym é um parêntesis esquerdo    
    5.1.1 Adicione sym ao topo da pilha P.   
  5.2 Se sym é um parêntesis direito    
    5.2.1 Se a pilha P está vazia, termine com false. 
    5.2.2 Remova o parêntesis do topo de P para uma variável left.  
    5.2.3 Se left e sym não são parêntesis complementares, termine com false.   
6.  Termine com true se a pilha P está vazia, ou false caso contrário.  
Obs.: Se for utilizar linguagem C ou similar, que nativamente não implementa a estrutura de dados pilha, os passos 2 e 3 do algoritmo são necessários. Se for utilizada a linguagem Java ou outra orientada a objeto, os passos 2 e 3 não são necessários. 
