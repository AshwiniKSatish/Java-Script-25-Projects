<!DOCTYPE html>
<html>
<head>
  <title>Return Negative</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">RETURN NEGATIVE</h1>
    
    <div style="text-align: center;">
        <label for="numberInput">Enter the number:</label><br>
        <input type="number" id="numberInput" placeholder="Enter the number">
        <br><br>
        <button onclick="returnNegative()">Return Negative</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function returnNegative() {
            const num = parseInt(document.getElementById("numberInput").value);
            const result = num < 0 ? num : -num;
            document.getElementById("result").innerHTML = "Result is: " + result;
        }
    </script>
</body>
</html>
