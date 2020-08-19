function showValue(a) {
    switch (a) {
      case 0:
        value = "<p>Ground Floor</p>";
        break;
      case 1:
        value = "<p>First Floor</p>";
        break;
      case 2:
        value = "<p>Second Floor</p>";
        break;
      case 3:
        value = "<p>Third Floor</p>";
        break;
      case 4:
        value = "<p>Fourth Floor</p>";
        break;
      case 5:
        value = "<p>Fifth Floor</p>";
        break;
      case 6:
        value = "<p>Sixth Floor</p>";
        break;
    }

    document.getElementById("result").innerHTML = value;
  }