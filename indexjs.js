let sum = 0;
$(function() {
	$("#cleanall").click(function(){
		const tableoutput = $("#tableoutput");
		const leftvotes = $("#votesvalue");

		leftvotes.text(0);
		tableoutput.empty();
	});
    // Початок голосування
	$("#votesInp").on("input", function () {
        	$("input[name='electionquantity']").prop('checked', false);
    	});

	$(".electionquantity").click(function(){
    		let input = $("#votesInp");
    		input.val('');
	});

    $("#startvotes").click(function() {
        const inputCandidates = $("#canditatesInp").val();
        const container = $("#tableoutput");
        let inputVotes = $("#votesInp").val();;
	const checkedValue = $("input[name='electionquantity']:checked").val();

	const containerVotes = $("#votesvalue");

	if (checkedValue !== undefined) {
        	inputVotes = checkedValue;
    	}
	
	if(inputVotes - inputCandidates > 0){
        // Очищення таблиці перед створенням нового вмісту
        	container.empty();

        	let newHeader = $("<tr>");
        	let newRow = $("<tr>");
        	let candidate, c = 0;

        	for (let i = 0; i < inputCandidates; i++) {
            		// Додавання комірки типу "Candidates" до рядка
            		candidate = $('<button class="buttonCandidate w3-button w3-border-black w3-border w3-padding Candidates">0</button>');

            		c++
            		let cellHeader = $("<td>").text("Кад." + c);
            		let cell = $("<td>");
            		cell.append(candidate);

            		// Додавання комірки до рядка
            		newHeader.append(cellHeader);
            		newRow.append(cell);
        	}

        	// Додавання нового рядка до тіла таблиці
        	container.append(newHeader);
        	container.append(newRow);

        	containerVotes.text(inputVotes - inputCandidates);
	} else{
		container.empty();
        	containerVotes.text(0);
		alert("Голосувальників має бути більше ніж кандитатів")
	}
    });

    $("#turnend").click(function() {
	const containerVotes = $("#votesvalue");
	let leftVotes = parseInt($("#votesvalue").text());

	if(leftVotes > 0){
		alert("Ще не всі проголосували!");
	}
	else{
	let candidatebutton = $(".candidatebutton").text()
        let tableout = $("#tableoutput");
	
	// Знаходження всіх кнопок з класом "yourButtonClass"
	let buttons = $(".Candidates");

	// Ініціалізація змінних для найменшого тексту та відповідної кнопки
	let minText = null;
	let pospoint = 0;
	const placemin = [];
	const pos = [];

	// Перебір кожної кнопки
	buttons.each(function() {
    		// Отримання тексту поточної кнопки
    		let buttonText = $(this).text();

		pospoint += 1;
		pos.push(parseInt(pospoint));
		placemin.push(parseInt(buttonText));

		if (minText === null || buttonText < minText) {
        		minText = buttonText;
    		}
	});
	
	let n = 0;
	let rem;
	let rem1, rem2 = 0;
	for(let i = 0; i < pos.length; i++){
		if(parseInt(placemin[i]) === parseInt(minText)){
			rem = parseInt(pos[i])-parseInt(n);
			let del = "td:nth-child(" + rem + ")";
			tableout.find(del).remove();
			n++;
			rem2 += parseInt(placemin[i]);
			rem2 += 1;
		}
	}
	rem1 = rem2;
	containerVotes.text(rem1);
    });

    $("#tableoutput").on("mousedown", ".Candidates", function(event) {
        let leftVotes = parseInt($("#votesvalue").text());
        let currentValue = parseInt($(this).text());

        if (event.which === 3 || event.button === 2) {
            if (currentValue > 0) {
                let newValue = currentValue - 1;
                $(this).text(newValue);
                leftVotes++;
            }
        } else if (event.originalEvent.pointerType === "touch") {
            if (currentValue > 0) {
                let newValue = currentValue - 1;
                $(this).text(newValue);
                leftVotes++;
            }
        } else {
            // Лівий клік для десктопу
            if (leftVotes > 0) {
                let newValue = currentValue + 1;
                $(this).text(newValue);
                leftVotes--;
            }
        }

        const containerVotes = $("#votesvalue");
        containerVotes.text(leftVotes);
    });

    $("#tableoutput").on("contextmenu", ".Candidates", function(event) {
        event.preventDefault();
    });

    $("#tableoutput").on("wheel", ".Candidates", function(event) {
        event.preventDefault();

        let leftVotes = parseInt($("#votesvalue").text());
        let currentValue = parseInt($(this).text());
        let delta = event.originalEvent.deltaY; // Значення зміни колеса миші

        if (delta > 0 && currentValue > 0) {
            // Колесо миші прокручено вниз
            if (currentValue > 0) {
                let newValue = currentValue - 1;
                $(this).text(newValue);
                leftVotes++;
            }
        } else {
            // Колесо миші прокручено вверх
            if (leftVotes > 0) {
                let newValue = currentValue + 1;
                $(this).text(newValue);
                leftVotes--;
            }
        }

        const containerVotes = $("#votesvalue");
        containerVotes.text(leftVotes);
    });
});

