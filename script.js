function encriptar (texto) {
  
  let resultado = '';
  for(x=0; x < texto.length; x++){
    switch (texto[x]) {
      case 'a':
        resultado = resultado + 'ai';
        break;
      case 'e':
        resultado = resultado + 'enter';
        break;
      case 'i':
        resultado = resultado + 'imes';
        break;
      case 'o':
        resultado = resultado + 'ober';
        break;
      case 'u':
        resultado = resultado + 'ufat';
        break;
      default:
        resultado = resultado + texto[x];
        break;
    }
  }
  
  console.log(resultado);

  document.querySelector('.textoResultante').innerHTML = resultado;
  document.querySelector('.tips').style.display = 'none';
  document.querySelector('.evento').style.display = 'flex';
}

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function desencriptar (texto) {
  
  let resultado = texto;
  resultado = resultado.replaceAll('ai', 'a');
  resultado = resultado.replaceAll('enter', 'e');
  resultado = resultado.replaceAll('imes', 'i');
  resultado = resultado.replaceAll('ober', 'o');
  resultado = resultado.replaceAll('ufat', 'u');
  
  console.log(resultado);

  document.querySelector('.textoResultante').innerHTML = resultado;
  document.querySelector('.tips').style.display = 'none';
  document.querySelector('.evento').style.display = 'flex';
}



function copiarAclipboard() {
  const texto = document.querySelector('.textoResultante').innerHTML;
  const type = "text/plain";
  const blob = new Blob([texto], { type });
  const data = [new ClipboardItem({ [type]: blob })];

  navigator.clipboard.write(data).then(
    () => {
      /* success */
      document.querySelector('.modalCopiado').classList.toggle('show');
      document.querySelector('.modalCopiado').classList.toggle('hide');
    },
    () => {
    /* failure */
    document.querySelector('.modalCopiado2').classList.toggle('show');
    document.querySelector('.modalCopiado2').classList.toggle('hide');
    }
  );
}
