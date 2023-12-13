let longClickTimer;
let longorshort = 0;

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
        let inputVotes = $("#votesInp").val();
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
        } else {
            container.empty();
            containerVotes.text(0);
            alert("Голосувальників має бути більше ніж кандитатів");
        }
    });

    $("#turnend").click(function() {
    const containerVotes = $("#votesvalue");
    let leftVotes = parseInt($("#votesvalue").text());
	// Знаходження всіх кнопок з класом "Candidates"
        let buttons = $(".Candidates");

    if(leftVotes > 0){
        alert("Ще не всі проголосували!");
    } else if(buttons.length <= 0){}
    else {
        let tableout = $("#tableoutput");

	let del = null;
	let n = 0;
	let rem = 0;
	let votesback = 0;

        // Ініціалізація змінних для мінімального значення та відповідних кнопок
        let minText = null;
        let minButtons = [];
	let minpos = [];
	let pos = 0;

        // Перебір кожної кнопки
        for (let i = 0; i < buttons.length; i++) {
    	// Отримуємо текст поточної кнопки
    	let buttonText = parseInt($(buttons[i]).text());
	pos += 1;

    	if (minText === null || buttonText < minText) {
        	minText = buttonText;
        	minButtons = [$(buttons[i])];
		minpos = [pos];
    	} else if (buttonText === minText) {
        	minButtons.push($(buttons[i]));
		minpos.push(pos);
    	}
	}

	if (minButtons.length == buttons.length){
		const randomColumnIndex = Math.floor(Math.random() * buttons.length)+1;
		const dataFromRandomColumn = $("#tableoutput tr:first-child td:nth-child(" + randomColumnIndex + ")").text();

		let modaltext = $("#modalout");

		modaltext.text("Переможець: " + dataFromRandomColumn);

		// Показуємо заголовок стовбця через alert
		$("#modaloutput").show();
	}
        else if (minButtons.length > 0) {
            // Здійснюємо видалення всіх стовпців з мінімальним значенням
            minButtons.forEach(function(minButton) {
                votesback += parseInt(minButton.text());
            });
	    
 	    minpos.forEach(function(minpo){
		rem = parseInt(minpo) - parseInt(n);
		del = "td:nth-child(" + rem + ")";
		tableout.find(del).remove();
		n += 1;
	    });

            containerVotes.text(votesback+minButtons.length);
        }
	
	const buttonscheck2 = $(".Candidates");	
	if(buttonscheck2.length == 1){
		// Отримуємо заголовок стовбця за його індексом
		const firstColumnHeader = $("#tableoutput tr:first-child td:first-child").text();

		let modaltext = $("#modalout");

		modaltext.text("Переможець: " + firstColumnHeader);

		// Показуємо заголовок стовбця через alert
		$("#modaloutput").show();
	}

    }
});

$("#closemodal").click(function(){
	$("#modaloutput").hide();
});


	//Права мишка
    $("#tableoutput").on("mousedown", ".Candidates", function(event) {
        let leftVotes = parseInt($("#votesvalue").text());
        let currentValue = parseInt($(this).text());

        if (event.which === 3 || event.button === 2) {
            if (currentValue > 0) {
                let newValue = currentValue - 1;
                $(this).text(newValue);
                leftVotes++;
            }
        }

        const containerVotes = $("#votesvalue");
        containerVotes.text(leftVotes);
    });

    $("#tableoutput").on("contextmenu", ".Candidates", function(event) {
        event.preventDefault();
    });
	//Колесико
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

//Довгий лівий
$('#tableoutput').on('touchstart mousedown', '.Candidates', function(event) {
    if (event.which === 1) {
        let leftVotes = parseInt($("#votesvalue").text());
        let currentValue = parseInt($(this).text());
	longorshort = 0;
        // Лівий клік (1)
        longClickTimer = setTimeout(() => {
            if (currentValue > 0) {
                let newValue = currentValue - 1;
                $(this).text(newValue);
                leftVotes++;
		longorshort = 1;
            }
		const containerVotes = $("#votesvalue");
            containerVotes.text(leftVotes);
        }, 200); // Час у мілісекундах
    }
});

//Лівий клік
$('#tableoutput').on('touchend mouseup', '.Candidates', function(event) {
    if (event.which === 1 && longorshort == 0) {
        // Лівий клік (1)
	let leftVotes = parseInt($("#votesvalue").text());
	let currentValue = parseInt($(this).text());

        clearTimeout(longClickTimer);
	if (leftVotes > 0) {
                let newValue = currentValue + 1;
                $(this).text(newValue);
                leftVotes--;
            }

	const containerVotes = $("#votesvalue");
        containerVotes.text(leftVotes);
    }
});


});

