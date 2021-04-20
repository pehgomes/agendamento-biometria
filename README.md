# Agendamento de Biometria

Diante do cenário do cadastro de biometrias em um curto espaço de tempo, levando a acontecer filas quilométricas ao redor do centro de eventos do ceara, durante as últimas semanas de maio de 2019, basicamente este código escrito em node.js realizará tentativas de agendamento da biometria, através do sistema do TRE do Ceará.

## Começando
Faça o clone do projeto em uma pasta de sua escolha 

### Pré-requisitos
Crie uma conta no [Nexmo](https://dashboard.nexmo.com/sign-up), para obter sua chave de api e secret.

```
Tenha em sua máquina o Node, npm e git.
```

### Colocando pra funcionar

Faça o clone deste repo

```
git clone https://github.com/PedroHenriGomes/AgendamentoBiometria.git
```

entre na pasta do projeto

```
cd AgendamentoBiometria/
```

instale as dependências

```
npm install package-lock.json
```

após criada a conta no Nexmo, substitua no código a apiKey, apiSecret e seu número de telefone. Segue exemplo abaixo.
```
function enviarSms() {
    const nexmo = new Nexmo({
        apiKey: 'SUA CHAVE',
        apiSecret: 'SEU SECRET',
    });
    const to = '5585988887777'
    const from = 'Nexmo';
}
```

execute o script

```
node biometria.js
```

## Feito com

* [Node](https://nodejs.org/en/docs/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.


