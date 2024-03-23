<!DOCTYPE html>
<html>
<head>
  <title>Even or Odd</title>
</head>
<body>
    <h1 style="background-color:bisque; text-align: center;">Even or Odd</h1>
    
    <div style="text-align: center;">
        <label for="numberInput">Enter the number:</label><br>
        <input type="number" id="numberInput" placeholder="Enter the number">
        <br><br>
        <button onclick="checkEvenOrOdd()">Check Even/Odd</button><br><br>
        <h2 id="result" style="background-color: rgb(207, 90, 27); border:20px;"></h2>
    </div>

    <script>
        function checkEvenOrOdd() {
            const num = parseInt(document.getElementById("numberInput").value);
            let result;

            if (num % 2 === 0) {
                result = "Even Number";
            } else {
                result = "Odd Number";
            }

            document.getElementById("result").innerHTML = "Result is: " + result;
        }
    </script>
</body>
</html>
