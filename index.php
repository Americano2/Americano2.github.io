<!DOCTYPE html>
<html lang="ua">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="indexstyle.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="index.js"></script>
    <title>Класичне голосування</title>
</head>
<body>
    <hr class="w3-border">

	<div class="w3-cell-row">
	<!-- Кандидати -->
	<div class="w3-cell w3-container w3-mobile w3-section">
    <label for="input">Введіть кількість кандидатів:</label>
    <input type="number" class="w3-input w3-border w3-section" id="canditatesInp" min="1" placeholder="Кількість кандитатів" oninput="onchangeTable()">
	</div>

	<!-- Голосувальники -->
	<div class="w3-cell w3-container w3-mobile w3-section w3-border-left">
    <label for="input">Введіть кількість голосувальників та кандитатів або оберіть:</label>
    <input type="number" class="w3-input w3-border w3-section" id="votesInp" min="1" placeholder="Кількість голосувальників" oninput="inputvotes()">
	<div class="w3-right">

    <input type="radio" class="w3-radio electionquantity" name="electionquantity" value="29" onclick="checkquantity()">
    <label>29</label>
    <input type="radio" class="w3-radio electionquantity" name="electionquantity" value="27" onclick="checkquantity()">
    <label>27</label>
    <input type="radio" class="w3-radio electionquantity" name="electionquantity" value="54" onclick="checkquantity()">
    <label>54</label>
	</div>
	</div>
	</div>

    <hr class="w3-border">
    <button class="w3-button w3-light-grey w3-border w3-margin-right w3-block" id="startvotes">Розпочати голосування</button>
	
	<div class="w3-container w3-light-grey">
	<div class="w3-cell w3-left">
    <button class="w3-button w3-light-grey w3-margin-right w3-padding" id="turnend">Закінчити раунд!</button>
    Кількість голосів: <span class="w3-badge w3-light-grey" id="votesvalue">0</span>
	</div>
	<div class="w3-cell w3-right">
    <button class="w3-button w3-light-grey w3-margin-left w3-padding" id="cleanall">Очистити</button>
  	</div>
	</div>

	<table class="w3-table w3-border w3-bordered w3-centered w3-responsive" id="tableoutput">
	</table>

</body>
</html>

