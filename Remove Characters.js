<!DOCTYPE html>
<html>
<head>
  <title>Remove Characters</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Remove Characters</h1>
    
    <div style="text-align: center;">
        <label for="stringInput">Enter the String:</label><br>
        <input type="text" id="stringInput" placeholder="Enter the String">
        <br><br>
        <button onclick="removeCharacters()">Remove Characters</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function removeCharacters() {
            const str = document.getElementById("stringInput").value;
            const result = str.substring(1, str.length - 1);
            document.getElementById("result").innerHTML = "Result is: " + result;
        }
    </script>
</body>
</html>
