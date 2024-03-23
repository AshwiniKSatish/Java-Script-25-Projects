<!DOCTYPE html>
<html>
<head>
  <title>Hero and Dragons</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">HERO AND DRAGONS</h1>
    
    <div style="text-align: center;">
        <label for="bulletsInput">Enter the number of bullets:</label><br>
        <input type="number" id="bulletsInput" placeholder="Enter the number of bullets">
        <br><br>
        <label for="dragonsInput">Enter the number of dragons:</label><br>
        <input type="number" id="dragonsInput" placeholder="Enter the number of dragons">
        <br><br>
        <button onclick="checkWinner()">Check Winner</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function checkWinner() {
            const bullets = parseInt(document.getElementById("bulletsInput").value);
            const dragons = parseInt(document.getElementById("dragonsInput").value);

            const heroWins = bullets / dragons >= 2;
            const result = heroWins ? "Hero won" : "Dragons won";

            document.getElementById("result").innerHTML = "Result is: " + result;
        }
    </script>
</body>
</html>
