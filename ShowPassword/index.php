<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Show/Hide Password</title>
</head>

<body>
    <form action="">
        <label for="password">Password</label>
        <input type="password" name="password" id="input">
        <input id="checkbox" type="checkbox">
        <span id="display">Show</span><br>        
        <input type="button" value="Send">
        <div id="eye">
        <svg
          width="30"
          height="30"
          fill="none"
          stroke="#2b2b2b"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
          <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6z"></path>
        </svg>
        </div>
    </form>
    <script type="text/javascript" src="main.js"></script>
</body>

</html>
