let dados = {
  nome_loja: "Arcos Dourados Com. de Alimentos LTDA",
  logradouro: "Av. Projetada Leste",
  numero: 500,
  complemento: "EUC F32/33/34",
  bairro: "Br. Sta Genebra",
  municipio: "Campinas",
  estado: "SP",
  cep: "13080-395",
  telefone: "(19) 3756-7408",
  observacao: "Loja 1317 (PDP)",
  cnpj: "42.591.651/0797-34",
  inscricao_estadual: "244.898.500.113"
};

function dados_loja() {
  // Implemente aqui
  if (!dados.nome_loja){
    throw new Error (`O campo nome da loja é obrigatório`)
  }

  if (!dados.logradouro){
    throw new Error (`O campo logradouro do endereço é obrigatório`)
  }

  let _numero : string = dados.numero ? `${dados.numero}` : "s/n"  

  if (!dados.municipio){
    throw new Error (`O campo município do endereço é obrigatório`)
  }

  if (!dados.estado){
    throw new Error (`O campo estado do endereço é obrigatório`)
  }

  if (!dados.cnpj){
    throw new Error (`O campo CNPJ da loja é obrigatório`)
  }

  if (!dados.inscricao_estadual){
    throw new Error (`O campo inscrição estadual da loja é obrigatório`)
  }  

  let _complemento : String = dados.complemento ? ` ${dados.complemento}` : ""

  let _bairro : String = dados.bairro ? `${dados.bairro} - ` :  ""

  let _cep : String = ""
  let _telefone : String = ""
  
  if (dados.cep){
    _cep = `CEP:${dados.cep}`

    if (dados.telefone){
      _telefone = ` Tel ${dados.telefone}`
    } 
  }else{
    _telefone = `Tel ${dados.telefone}`
  }

  let _observacao : String = dados.observacao ? `${dados.observacao}` : ""


    return `${dados.nome_loja}
${dados.logradouro}, ${_numero}${_complemento}
${_bairro}${dados.municipio} - ${dados.estado}
${_cep}${_telefone}
${_observacao}
CNPJ: ${dados.cnpj}
IE: ${dados.inscricao_estadual}
`
}

module.exports = {
  dados: dados,
  dados_loja:  dados_loja
};
 