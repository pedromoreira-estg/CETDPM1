// JavaScript Document
//Usei método ready - só executa quando o documento acaba de carregar

function parseXml(xml)
{
  //find every Tutorial and print the author
  $(xml).find("album").each(function()
  {
    
	$("#text").append($(this).find("artista").text());
	$("#text").append(": "+$(this).attr("genero") + "<br />");
	$("#text").append('<img src="'+$(this).find("capa").attr("url") + '" /><br /><br />');
	
  });


}

$(document).ready(function(){
	
	
	//pedido de ajax pelo ficheiro xml
	$.ajax({
		type: "GET",
		url: "xml/discoteca.xml",
		dataType: "xml",
		success: parseXml
  	});
	
	
	
	//Mostrar div com id text
	$("#text").show();
	//Colocar palavra esconder no botão
	$("#button").html("Esconder");
	//Criar variável auxiliar que me indica que o texto está visivel
	var show = 1;
	
	// Ao clicar no botão
	$("#button").click(function(){
		//Se estiver visivel
		if(show==1)
		{
			//Mudar o html do botão para mostrar
			$("#button").html("Mostrar");
			//Variavel de visivel para 0
			show=0;
			//Tornar texto invisível
			$("#text").hide(500);
		}
		else
		{
			//Mudar o HTML do botão para esconder
			$("#button").html("Esconder");
			//Variavel de visivel passa para 1
			show=1;
			//Tornar texto visivel
			$("#text").show(500);
		}
		
		
	});
})