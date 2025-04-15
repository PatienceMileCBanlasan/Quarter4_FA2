function generateTable() {
    const start = parseInt(document.getElementById("Num1").value);
    const end = parseInt(document.getElementById("Num2").value);
    const outputDiv = document.getElementById("output");
  
    outputDiv.innerHTML = "";
  
    if (isNaN(start) || isNaN(end) || start < 2 || end > 10 || start > end) {
      alert("Please enter numbers between 2 and 10");
      return;
    }
  
    let tableHTML = "<table>";
  
    for (let i = 1; i <= start; i++) {
      tableHTML += "<tr>";
      for (let j = 1; j <= end; j++) {
        tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += "</tr>";
    }
  
    tableHTML += "</table>";
    outputDiv.innerHTML = tableHTML;
  }
