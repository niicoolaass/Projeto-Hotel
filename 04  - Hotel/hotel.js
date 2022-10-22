
		var nomehotel = prompt("O nome do hotel é?");

		var nomeusuario = prompt("Qual o seu nome?");

        	var senha = 2678;

 		var lista_hospedes = [];


		infsenha(); 

		function infsenha() {
			
			var qsenha = prompt("qual a senha?");

			if (qsenha == senha) {
				inicio();

			} else {
			alert("Por favor, informe a senha correta.");

			infsenha();
			}
		}


		function inicio() {

			alert("Bem vindo ao Hotel " + nomehotel + ", " + nomeusuario + ". É um imenso prazer ter você por aqui!")

			var escolha = parseInt(prompt("Selecione uma opção: \n\n 1.) Reserva de Quartos. \n 2.) Abastecimento de Carros. \n 3.) opções de hospedes. \n 4.) eventos. \n 5.) Buffet. \n 6.) Auditórios para eventos. \n 7.) Reserva restaurante para eventos. \n 8.) manutenção de ares condicionados. \n 9.) sair."));
			
			if (escolha < 1 || escolha > 8) {
				alert("Por favor, informe um número entre 1 e 8.");
				
				inicio();
				
			} else {
				switch (escolha) {
					case 1:
						reserva_quartos();
					case 2:
						abastecer_carros();
					case 3:
						opcoes_hospedes();
					case 4:
						eventos();
					case 5:
						buffet();
					case 6:
						auditorios_eventos();
					case 7:
						reserva_restaurante();
					case 8:
						manu_ares_condionados();
					case 9:
						sair();
				}
			}
		}


		function reserva_quartos() {
			alert("HOTEL " + nomehotel + " - RESERVA DE QUARTOS.");

			var vdiaria = parseInt(prompt("Qual o valor padrão da diária?"));

			if (vdiaria <= 0 || vdiaria ==="" || isNaN(vdiaria)) {
				alert("Valor inválido, " + nomeusuario);

				inicio();

			} else {
				var qdiaria= parseInt(prompt("Quantas diárias serão necessárias?"));
				
			} if (qdiaria <= 0 || qdiaria ==="" || isNaN(qdiaria)) {
				alert("Valor inválido, " + nomeusuario);

				inicio();
			} else {
				var vxq = vdiaria * qdiaria;

				alert("O valor de " + qdiaria + " dias de hospedagem é de R$" + vxq + ".")
			}

			var nomehospede = prompt("Qual o nome do hóspede?");

			var confhospedagem = prompt(nomeusuario + ", você confirma a hospedagem para " + nomehospede + " por " + qdiaria + " dias? S/N.");

			if (confhospedagem === "S") {
				alert(nomeusuario + ", reserva efetuada para " + nomehospede + ". O valor total é de R$" + vxq + " por " + qdiaria + " dias.");

			} else if (confhospedagem === "N") {
				alert(nomeusuario + ", reserva não efetuada.");

			}

			inicio();
		}

        function opcoes_hospedes() {

            var escolha_hospedes = parseInt(prompt("Cadastro de Hóspedes. \n\n Selecione uma opção: \n 1. Cadastrar. \n 2. Pesquisar. \n 3. Inicio."));

			if (escolha_hospedes < 1 || escolha_hospedes > 3) {
				alert("Por favor, informe um número entre 1 e 3.");
				
				opcoes_hospedes();
				
			} else {
            switch (escolha_hospedes) {
				case 1:
                    cadastro_hospedes();
				case 2:
                    pesquisar_hospedes();
                case 3:
					inicio();
		    }
			}
        }


        function cadastro_hospedes() {

        if (lista_hospedes.length >= 15){
            alert("Numero máximo de hóspedes cadastrados.");

        } else {	
            var nome_hospede = prompt("Por favor, informe o nome da(o) hóspede:");
                
            lista_hospedes.push(nome_hospede);
                
            console.log(lista_hospedes);

            alert("Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!");
            }
        
        	opcoes_hospedes();
        }


        function pesquisar_hospedes() {
            var nome_hospede = prompt("Por favor, informe o nome da(o) hóspede para pesquisa:");

            if (lista_hospedes.includes(nome_hospede)){
                alert(nome_hospede + "encontrada(o).");

            } else {
                alert(nome_hospede + "não foi encontrada(o).");
            }
            
        	opcoes_hospedes();
        }


		function eventos() {
			alert("HOTEL " + nomehotel + " - EVENTOS.");

			var hevento = prompt("Qual a duração do evento em horas?");

			var qgarcons = prompt("Quantos garçons serão necessários?");
			
			var garcons = 10.50 * hevento * qgarcons;

			alert("Curso total: R$" + garcons);

			var confreserva = prompt("Gostaria de efetuar a reserva? S/N")

			if (confreserva === "S") {
				alert("Reserva efetuada com sucesso.");

			} else if (confreserva === "N") {
				alert("reserva não efetuada.");
			}

		}


		function buffet() {
			alert("HOTEL " + nomehotel + " - BUFFET.");

			var qconvidados = prompt("Qual o número de convidados para o evento?");

			var convagua = 0.5 * qconvidados;

			var convcafe = 0.2 * qconvidados;

			var convsalgados = 7 * qconvidados;

			var valoragua = 0.40 * convagua;
			
			var valorcafe = 0.80 * convcafe;

			var valorsalgados = qconvidados * 7 / 2.94;

			var valorbuffet = valoragua + valorcafe + valorsalgados;

			Math.round(valorbuffet);

			if (qconvidados > 360) {
				alert("Quantidade de convidados superior à capacidade máxima.");
				
				inicio();
			} else {
				alert("O evento precisará de " + convcafe + " Litros de café, " + convagua + " Litros de água, " + convsalgados + " salgados. O custo total do evento será de R$" + Math.round(valorbuffet) + ".");
			}

			var rbuffet = prompt("Gostaria de efetuar a reserva? S/N.")

			if (rbuffet === "S") {
				alert(nomeusuario + ", reserva efetuada com sucesso.")

			} else if (rbuffet === "N") {
				alert("Reserva não efetuada.");

			}

			inicio();
		}


		function auditorios_eventos() {
			alert("HOTEL " + nomehotel + " - AUDITÓRIOS DO EVENTO.");

			var cevento = prompt("Qual o número de convidados para o seu evento?");

			if (cevento > 220 && cevento < 350) {
				alert("Use o auditóio Colorado");

			}else if (cevento > 350 || cevento <= 0 ) {
				alert("Número de convidados inválido");

				inicio();

				} else {
				difauditoria = cevento - 150;

				alert("Use o auditório Laranja e inclua mais " + (difauditoria) + " cadeiras.");
			}

			var audreserva = prompt("Gostaria de efetuar a reserva? S/N")

			if (audreserva === "S") {
				alert(nomeusuario + ", reserva efetuada com sucesso.")
			} else {
				alert(nomeusuario + ", reserva não efetuada.")
			}

			inicio();
		}


		function reserva_restaurante() {
			alert("HOTEL " + nomehotel + " - RESERVA DE RESTAURANTE PARA EVENTOS.");

			var drestaurante = prompt("Qual o dia do evento?.")
			
			if (drestaurante == "segunda" || drestaurante === "terça" || drestaurante === "quarta" || drestaurante === "quinta" || drestaurante === "sexta" || drestaurante === "sabado" || drestaurante === "domingo") {
				var hrestaurante =  prompt("Qual a hora do seu evento?");

			} if (hrestaurante < 7 || hrestaurante > 23) {
				alert("Restaurante indisponível.");

				inicio();

			} if (drestaurante == "sabado" || drestaurante == "domingo"){
				
			} if (hrestaurante < 7 || hrestaurante > 15){
				alert("Restaurante indisponível.");

				inicio();

			} else {
				var empresa = prompt("Qual o nome da empresa?");
				 
				alert("Restaurante reservado para " + empresa + ". " + drestaurante + " às " + hrestaurante + "Hrs.");

				inicio();
			}
		}


		function abastecer_carros() {
			alert("HOTEL " + nomehotel + " - ABASTECER.");
		
			var alcoolwo =  prompt("Qual o valor do álcool no posto Wayne Oil?");

			var gasolinawo = prompt("Qual o valor do gasolina no posto Wayne Oil?");

			var alcoolsp = prompt("Qual o valor do álcool no posto Stark Petrol?");

			var gasolinasp = prompt("Qual o valor do gasolina no posto Stark Petrol?");

			var total_gasolinawo = alcoolwo * 42;
			var total_alcoolwo = gasolinawo * 42;
			var total_alcoolsp = alcoolsp * 42;
			var total_gasolinasp = gasolinasp * 42;

			var desconto_alcoolwo_gasolinasp = total_alcoolwo + total_gasolinasp * 30 / 100;
			var desconto_alcoolwo_gasolinasp = total_alcoolwo + total_gasolinawo * 30 / 100;
			var desconto_alcoolsp_gasolinasp = total_alcoolsp + total_gasolinasp * 30 / 100;
			var desconto_gasolinasp_gasolinawo = total_alcoolsp + total_gasolinawo * 30 / 100;
		
			if (total_gasolinawo > total_gasolinasp && desconto_alcoolsp_gasolinasp > total_gasolinasp && desconto_alcoolwo_gasolinasp > total_gasolinasp) {
				alert(nomeusuario + ", é mais barato abastecer com gasolina no posto Stark Petrol que é R$" + gasolinasp + ".");
		
			} else if (total_gasolinasp > total_gasolinawo && desconto_gasolinasp_gasolinawo > total_gasolinawo && desconto_alcoolwo_gasolinasp > total_gasolinawo) {
				alert(nomeusuario + ", é mais barato abastecer com gasolina no posto Wayne Oil que é R$" + gasolinawo + ".");
		
			} else if (total_alcoolsp > total_alcoolwo && total_gasolinasp > desconto_alcoolwo_gasolinasp && total_gasolinawo > desconto_alcoolwo_gasolinasp) {
				alert(nomeusuario + ", é mais barato abastecer com alcool no posto Wayne Oil que é R$" + alcoolwo + ".");
		
			} else {
				alert(nomeusuario + ", é mais barato abastecer com alcool no posto Stark Petrol que é R$" + alcoolsp + ".");
			}
		
			inicio();
		}


		}

		function manu_ares_condionados() {

			var nomeempresa =  prompt("Qual o nome da empresa?");
			
			var vaparelho =  prompt("Qual o valor por aparelho?");

			var qaparelho =  prompt("Qual a quantidade de aparelhos?");

			var porcdesconto =  prompt("Qual a porcentagem de desconto?")

			var mindesconto =  prompt("Qual o número mínimo de aparelhos para conseguir o desconto?");

			if (qaparelho < mindesconto) {
				var conta1 = (vaparelho * qaparelho / 100) ;

				alert("O serviço de " + nomeempresa + " custará R$" + conta1 + " (sem desconto).")
			} else {
				var conta2 = (vaparelho * qaparelho) / porcdesconto;

				
			}
		}

		function erro() {
			if (escolha < 1 || escolha > 7) {
				alert("Por favor, informe um número entre 1 e 7.");
				
			}else {
				confirm.window.close();
			}
			
			inicio();
		}


		function erro_pesquisar_hospedes(){
		    alert('Por favor, informe um número entre 1 e 3');
		    opcoes_hospedes();
		}


		function sair() {
			var confirma = confirm('Você deseja sair?');

			if (confirma) {
				alert("Muito obrigado e até logo, " + nomeusuario + ".")
				
				window.close();

			} else {
				inicio();
			}
		}

