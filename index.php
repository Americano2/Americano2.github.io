<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <script src="index1.js"></script>
    <title>Динамічне додавання елементів</title>
</head>
<body>

	<div class="w3-container">
  <h2>W3.CSS Modal</h2>
  <button onclick="document.getElementById('id01').style.display='block'" class="w3-button w3-black">Open Modal</button>

  <div id="id01" class="w3-modal">
    <div class="w3-modal-content">
      <div class="w3-container">
        <span onclick="document.getElementById('id01').style.display='none'" class="w3-button w3-display-topright">&times;</span>
        <p>Some text. Some text. Some text.</p>
        <p>Some text. Some text. Some text.</p>
      </div>
    </div>
  </div>
</div>

    <hr class="w3-border">

	<div class="w3-cell-row">
	<!-- Кандидати -->
	<div class="w3-cell w3-container w3-mobile w3-section">
    <label for="input">Введіть кількість кандидатів:</label>
    <input type="number" class="w3-input w3-border w3-section" id="canditatesInp" min="1" placeholder="Кількість кандитатів" oninput="onchangeTable()">
	</div>

	<!-- Голосувальники -->
	<div class="w3-cell w3-container w3-mobile w3-section w3-border-left">
    <label for="input">Введіть кількість голосувальників або оберіть:</label>
    <input type="number" class="w3-input w3-border w3-section" id="votesInp" min="1" placeholder="Кількість голосувальників" oninput="inputvotes()">
	<div class="w3-right">

    <input type="radio" class="w3-radio" name="electionquantity" value="29" onclick="checkquantity()">
    <label>29</label>
    <input type="radio" class="w3-radio" name="electionquantity" value="27" onclick="checkquantity()">
    <label>27</label>
    <input type="radio" class="w3-radio" name="electionquantity" value="54" onclick="checkquantity()">
    <label>54</label>
	</div>
	</div>
	</div>

    <hr class="w3-border">
    <a class="w3-button w3-light-grey w3-border w3-margin-right w3-block" href="electionclassic.php">Розпочати голосування</a>
</body>
</html>

