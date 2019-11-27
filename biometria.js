const axios = require('axios');
const moment = require('moment');
const Nexmo = require('nexmo');
const qs = require('qs');
const sleep = require('system-sleep');

locais = [
    { cod: 163, nome: 'rio mar' }, { cod: 159, nome: 'benfica' }, { cod: 11, nome: 'ceate' }, { cod: 164, nome: 'IGUATEMI' },
    { cod: 162, nome: 'parangaba' }, { cod: 183, nome: 'north shopp' }, { cod: 161, nome: 'riomar papicu' }, { cod: 167, nome: 'VIA SUL' }, { cod: 174, nome: 'UECE' },
    { cod: 158, nome: ' joquei' }
]

let deucerto = false;
while (!deucerto) {
    for (let local1 of locais) {
        if (deucerto) return;
        tentar(local1);
        sleep(14000);
    }
}

async function tentar(local) {
    let data = new Date();
    var dataHora = moment(data);
    var dataForm = dataHora.format('YYYY-MM-DD HH:mm:ss');
    let res = await axios({
        method: 'post',
        url: 'http://apps.tre-ce.jus.br/agendabio/publico/registrarAgendamentoEleitor.do?acao=atualizarDia',
        data: qs.stringify({
            local: local.cod
        }),
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'content-type': 'application/x-www-form-urlencoded',
            'Referer': 'http://apps.tre-ce.jus.br/agendabio/publico/registrarAgendamentoEleitor.do?acao=load',
            'Accept': 'application/json'
        }
    })
    if (!res.data.includes('AGUARDE')) {
        enviarSms(local, dataForm);
        console.log('############################# ACHOU A VAGA #############################');
        console.log(`HORA: ${dataForm}`);
        console.log(`LOCAL: ${local.nome}`);
        console.log('ACESSA AQUI:   http://www.tre-ce.jus.br/eleitor/agendamento-biometria ')
        deucerto = true;
    }

    console.log(`HORA: ${dataForm}`);
    console.log(`Status code: ${res.status}`);
    console.log(`Body: ${res.body}`);
    console.log(`local: ${local.nome}`);
    console.log(`RESP: ${res.data}`);

}

function enviarSms(local, data) {
    const nexmo = new Nexmo({
        apiKey: 'SUA CHAVE',
        apiSecret: 'SEU SECRET',
    });

    const from = 'Nexmo';
    const to = 'SEU TEL';
    const text = `ACHOU UMA VAGA: \n Local: ${local.nome} \n Acesse: http://www.tre-ce.jus.br/eleitor/agendamento-biometria  \n\n EM: ${data}`;

    nexmo.message.sendSms(from, to, text);
}
