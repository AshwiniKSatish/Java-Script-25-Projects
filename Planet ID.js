<!DOCTYPE html>
<html>
<head>
  <title>Planet ID</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Planet</h1>
    
    <div style="text-align: center;">
        <label for="planetIdInput">Enter the Planet ID:</label><br>
        <input type="number" id="planetIdInput" placeholder="Enter the Planet ID">
        <br><br>
        <button onclick="findPlanet()">Find Planet</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function findPlanet() {
            const planetId = parseInt(document.getElementById("planetIdInput").value);
            let name;

            switch(planetId) {
                case 1:
                    name = "Mercury";
                    break;
                case 2:
                    name = "Venus";
                    break;
                case 3:
                    name = "Earth";
                    break;
                case 4:
                    name = "Mars";
                    break;
                case 5:
                    name = "Jupiter";
                    break;
                case 6:
                    name = "Saturn";
                    break;
                case 7:
                    name = "Uranus";
                    break;
                case 8:
                    name = "Neptune";
                    break;
                default:
                    name = "Invalid Planet ID";
            }

            document.getElementById("result").innerHTML = "Result is: " + name;
        }
    </script>
</body>
</html>
