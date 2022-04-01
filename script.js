const acao = document.getElementById('acao');
const pausa = document.getElementById('pausa');
const sessoes = document.getElementById('sessoes');

let segundos


const iniciar = () => {
  if(acao.value == 0) {
    document.getElementById('erro_acao').innerHTML = 'Adicione os minutos';
    acao.focus()

  } else if (pausa.value == 0 ) {
    document.getElementById('erro_pausa').innerHTML = 'Adicione as pausas';
    pausa.focus()
    
  }else if (sessoes.value == 0 ) {
    document.getElementById('erro_sessoes').innerHTML = 'Adicione as sessões';
    sessoes.focus()
  }
}