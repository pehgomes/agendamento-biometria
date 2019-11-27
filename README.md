# Agendamento de Biometria

Basicamente este código escrito em Node.js realizará tentativas de agendamento da biometria, através do site do TRE do Ceará.

## Começando
Faça o clone do projeto em uma pasta de sua escolha 

### Pré-requisitos

```
Tenha em sua máquina o Node, npm e git.
```
```
Uma [conta no Nexmo](https://dashboard.nexmo.com/sign-up)
```
Após criada a conta no Nexmo, substitua no código a apiKey,apiSecret e seu número de telefone.
```
apiKey: 'sua chave de api do nexmo', apiSecret: 'sua api secret',
na function enviarSms altere o "const to" para o seu telefone. ex: const to = '5585988887777'
```
### Colocando pra funcionar

Faça o clone deste repo

```
git clone https://github.com/PedroHenriGomes/AgendamentoBiometria.git
```

entre na pasta que você clonou o projeto

```
cd minhaPasta
```

instale as dependências

```
npm install .\package-lock.json
```

execute o script

```
node .\biometria.js
```

## Feito com

* [Node](https://nodejs.org/en/docs/) - a JavaScript runtime built on Chrome's V8 JavaScript engine.
