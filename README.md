# Agendamento de Biometria

Basicamente este código escrito em Node.js realizará tentativas de agendamento da biometria, através do site do TRE do Ceará.

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

entre na pasta que você clonou o projeto

```
cd AgendamentoBiometria/
```

instale as dependências

```
npm install .\package-lock.json
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
node .\biometria.js
```

## Feito com

* [Node](https://nodejs.org/en/docs/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.


