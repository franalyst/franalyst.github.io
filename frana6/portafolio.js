const actualizar = () =>{
	const texto__ingresado = document.getElementById("texto__ingresado");
	const editor = document.getElementById("editor");
	editor.srcdoc = texto__ingresado.value;
}
