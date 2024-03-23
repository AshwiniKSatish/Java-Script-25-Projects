<!DOCTYPE html>
<html>
<head>
  <title>String Remove Spaces</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">String Remove Spaces</h1>
    
    <div style="text-align: center;">
        <label for="longStringInput">Enter a long String:</label><br>
        <input type="text" id="longStringInput" placeholder="Enter a long String">
        <br><br>
        <button onclick="removeSpaces()">Remove Spaces</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function removeSpaces() {
            const longString = document.getElementById("longStringInput").value;
            const result = longString.replace(/\s/g, "");
            document.getElementById("result").innerHTML = "Result is: " + result;
        }
    </script>
</body>
</html>
