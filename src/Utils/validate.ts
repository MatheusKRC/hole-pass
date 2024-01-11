// Referencia do validateEmail: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
function validateEmail(emailValidate: string) {
  const re = /\S+@\S+\.\S+/;
  return re.test(emailValidate);
}

// Referencia do validarCPF: https://pt.stackoverflow.com/questions/123741/validar-cpf-com-express%C3%A3o-regular-javascript
function validarCPF(inputCPF: any) {
  let soma = 0;
  let resto;

  if (inputCPF === '00000000000') return false;
  for (
    let i = 1; i <= 9; i++
  ) soma += parseInt(inputCPF.substring(i - 1, i), 10) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(inputCPF.substring(9, 10), 10)) return false;

  soma = 0;
  for (
    let i = 1; i <= 10; i++
  ) soma += parseInt(inputCPF.substring(i - 1, i), 10) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  return resto === parseInt(inputCPF.substring(10, 11), 10);
}

export { validarCPF, validateEmail };
