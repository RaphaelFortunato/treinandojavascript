/*Arquivo JavaScript*/

function validacao() {
	if(document.form.nome.value=="") {
		alert("Por favor, preencha o campo nome.");
		document.form.nome.focus();
		return false;
	}
	
	if(document.form.email.value=="" || document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1) {
		alert("Por favor, digite um e-mail válido");
		document.form.email.focus();
		return false;
		
	}
	
	if(document.form.senha.value.length <8) {
		alert("A senha tem que ter no minimo 8 caracteres");
		document.form.senha.focus();
		return false;
		
	}
	
	
}