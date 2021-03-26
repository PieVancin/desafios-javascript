# JavaScript

[Curso Grátis de JavaScript e ECMAScript para Iniciantes](https://www.youtube.com/playlist?list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1)

- Exercícios
    - **Qual é a diferença entre usar =, == e === em códigos escritos em JS?**

        O sinal de = serve para atribuir um atributo à uma variável, propriedade etc. exemplo: **var idade** **= 20.** 

        O igual duplo (**==)** serve para comparar duas variáveis, sem considerar os seus tipos. exemplo: **21 == '21'** **retorna True,** pois o número 21 e a string 21 tem o mesmo conteúdo.

        Agora, se quisermos comparar se duas variáveis são iguais **e tem o mesmo tipo,** usamos o sinal de igual triplo (===). exemplo: '**Pierre' === 'Pierre' retorna True**, pois ambos são strings e tem o mesmo valor.

    - **Em uma mesma expressão, temos os operadores || e &&. Quem eu resolvo primeiro?**

        O sinal de conjunção **&&** sempre é resolvido antes do sinal de disjunção **||.**

- Módulo A
    - Exercícios
        - Você sabe a diferença entre um cliente e um servidor para a internet?
        - Para que serve HTML, CSS e JavaScript?
        - Cite 4 sites que fazem uso do JavaScript

            Existem vários, como o Facebook, YouTube, Google, Notion etc.

        - Sabe a empresa que criou o JavaScript?
        - Java e JavaScript possuem alguma relação?
        - O que o ECMAScript tem a ver com o JavaScript?
        - 

    # Primeiros Scripts

    ```jsx
    window.alert('Olá') //Mostra uma janela de alerta ao carregar o site
    window.confirm() //Mostra um janela de confirmação ao carregar o site
    window.prompt('Qual o seu nome?') //Mostra uma janela com uma barra de resposta
    ```

- Módulo B
    - Exercícios
        - Sabe diferenciar HTML, CSS e JavaScript dentro de um código?
        - Sabe disparar alertas, confirmações e perguntas?
        - O que é uma variável?
        - Como declarar uma variável numérica inteira ou real no JS?
        - Quais são os tipos primitivos do JS?
        - O que significa colocar o valor null dentro de uma variável?
        - Como é possível guardar o valor digitado em um prompt() dentro de uma variável?
        - Como fazer com que um número digitado em um prompt() possa ser usado em cálculos?
        - Como transformar um texto todo para letras MAIÚSCULAS?
        - Parar que serve o operador % em JS? Seria para calcular porcentagem?
        - Se uma variável n está valendo 10 e executamos um **n += 5,** qual será seu novo valor?
        - Para que servem os operadores **— e ++** ?

    # `${Manipulação de Dados}`

    - Os principais tipos primitivos do JavaScript são: **number** e **string**.

    ## Guardando os dados de um prompt

    ```jsx
    //armazena o que foi digitado na variável nome
    var nome = window.prompt('Qual o seu nome?')
    //Concatena a frase com a variável
    window.alert('É um grande prazer te conhecer, ' + nome)
    ```

    ## Concatenação e Conversão de tipos

    O símbolo **+**, além de ser usado para adição, também é usado para concatenar dados

    - Os comandos **window.prompt, window.alert**, etc. **sempre retornam string.** Se quisermos somar  o que foi digitado, precisamos **converter  o input de string para number. Além dos comandos parseInt e parseFloat, podemos usar um novo recurso chamando apenas de Number:**

        ```jsx
        var n1 = (window.prompt('Digite um número')) //String
        var n2 = (window.prompt('Digite outro número')) //String
        var s = n1 + n2
        window.alert('A soma dos valores é' + s) //Concatenação, irá retornar um numero depois o outro

        var n1 = Number(window.prompt('Digite um número')) //String para Number
        var n2 = Number(window.prompt('Digite outro número')) //String para Number
        var s = n1 + n2
        window.alert('A soma dos valores é' + s) //Irá retornar a soma
        	
        ```

    # `${Template String}`

    É uma forma de usar um **Placeholder,** assim com na linguagem C e Python. Assim é possível colocar uma string dentro de uma frase, usando a sintaxe a seguir:

    ```jsx
    var s = 'JavaScript'
    'Eu estou aprendendo s' //não faz interpolação
    'Eu estou aprendendo ' + s //usa concatenação
    `Eu estou aprendendo ${s}` //usa template string

    //outro exemplo
    var nome = 'Pierre'
    var idade = 20
    var nota = 10
    'O aluno ' + nome + ' com ' + idade + ' anos tirou a nota ' + nota //usando concatenação
    `O aluno ${nome} com ${idade} anos tirou a nota ${nota}` //usando template string
    ```

    # Print

    Para usarmos o print, igual o **print** do Python e o **printf** do C, usamos a seguinte sintaxe:

    ```jsx
    var nome = window.prompt('Qual o seu nome?')
    document.writeln(`Olá ${nome}!`) //writeln é igual o println e prinfln, significa 
    //"Next Line"
    ```

    # Operadores

    ## Operadores Aritméticos

    ```jsx
    + // Adição
    - // Subtração
    * // Multiplicação
    ** // Potência
    ```

    ## Operadores de Atribuição

    - +=  ou ++
    - -= ou  - -

    ## Ordem de Precedência

    No JavaScript, a precedência de operadores funciona igual a matemática básica, primeiro o que está entre **parênteses**, depois a **potência**, depois a **multiplicação**, **divisão** e o **resto**, e por último **adição** e **subtração**.

    ## Operadores Relacionais

    ```jsx
    5 > 2 = true
    7 < 4 = false
    8 >= 8 = true
    9 <= 7 = false
    5 == 5 = true
    4 != 4 = false
    ```

    - Os operadores relacionais do JavaScript **não testam o tipo. Para comparar se duas variáveis são do mesmo tipo, é usado o operador '==='.**

    ## Operadores Lógicos

    - Negação (ou NOT): usamos o símbolo **!**
    - Conjunção (ou AND): usamos o símbolo **&&**
    - Disjunção (ou OR): usamos o símbolo **||**

    Primeiro o **!**, depois o **&&** e depois o **||**

    ## Operadores Ternários

    São como os **If's** das outras linguagens, usando ? e :

    ```jsx
    media > 7 ? 'Aprovado' : 'Reprovado'
    // (condição) ? (se sim faça isso) : (se não faça isso)
    ```

- Módulo C

    # DOM

    Document Object Model

    Árvore DOM:

    ![JavaScript%20a8fa4598ae9048f792ab487660312a5e/2021-03-03.png](JavaScript%20a8fa4598ae9048f792ab487660312a5e/2021-03-03.png)

- Módulo D

    # Condições

    As condições do JavaScript são muito parecidas com as da linguagem C.

    ## Condição Múltipla

    ```jsx
    switch (expressão) {
    	case valor 1:
    			// faça tal coisa
    			break
    	case valor 2:
    			// faça tal coisa
    			break
    	default:
    			// faça tal coisa
    			break
    }
    ```

    # Horários e datas

    Podemos chamar o objeto **Date()** para usarmos informações como **data, horário, dia da semana, minutos, segundos** etc. Ele armazena todas essas informações e podemos chama-las em uma variável:

    ```jsx
    var agora = new Date()
    var diaSem = agora.getDay()
    ```

    # Switch

    É usado quando queremos executar instruções diferentes para cada valor em forma de **cases**. Devemos sempre colocar um **Break** ao final de cada case para que o computador saiba que deve parar ali e seguir com o resto do código que vier depois do switch. Ele é capaz de avaliar **Números Inteiros**, **Caracteres e Strings.**

    ```jsx
    var agora = new Date()
        var diaSem = agora.getDay()

        switch(diaSem) {
            case 0:
                console.log('Domingo')
                break
            case 1:
                console.log('Segunda')
                break
            case 2:
                console.log('Terça')
                break
            case 3:
                console.log('Quarta')
                break
            case 4:
                console.log('Quinta')
                break
            case 5:
                console.log('Sexta')
                break
            case 6:
                console.log('Sábado')
                break
            default:
                console.log('Erro: dia inválido')
                break
        }
    ```