const optionsPdfMap = {
    "Car Insurance": {
      "Option 1": {
        "Sub-option 1": "./assets/Documents/pdf7.pdf",
        "Sub-option 2": "./assets/Documents/pdf2.pdf",
      },
      "Option 2": {
        "Sub-option A": "./assets/Documents/pdf3.pdf",
        "Sub-option B": "./assets/Documents/pdf4.pdf",
      },
    },
    "Bike Insurance": {
        "Option 3": {
          "Sub-option 4": "./assets/Documents/pdf5.pdf",
          "Sub-option 5": "./assets/Documents/pdf6.pdf",
        },
        "Option 4": {
          "Sub-option D": "./assets/Documents/pdf7.pdf",
          "Sub-option E": "./assets/Documents/pdf8.pdf",
        },
      },
      "Personal Accident": {
        "Option 5": {
          "Sub-option 7": "./assets/Documents/pdf9.pdf",
          "Sub-option 8": "./assets/Documents/pdf10.pdf",
        },
        "Option 6": {
          "Sub-option G": "./assets/Documents/pdf11.pdf",
          "Sub-option H": "./assets/Documents/pdf12.pdf",
        },
      },
      "Life Insurance": {
        "Option 7": {
          "Sub-option 10": "./assets/Documents/pdf13.pdf",
          "Sub-option 11": "./assets/Documents/pdf14.pdf",
        },
        "Option 8": {
          "Sub-option J": "./assets/Documents/pdf15.pdf",
          "Sub-option K": "./assets/Documents/pdf16.pdf",
        },
      },
      "Home Insurance": {
        "Option 9": {
          "Sub-option 13": "./assets/Documents/pdf17.pdf",
          "Sub-option 14": "./assets/Documents/pdf18.pdf",
        },
        "Option 10": {
          "Sub-option M": "./assets/Documents/pdf19.pdf",
          "Sub-option N": "./assets/Documents/pdf20.pdf",
        },
      },
   
  };

  document.getElementById("insuranceType").addEventListener("change", function() {
    const insuranceType = this.value;
    const selectBox1 = document.getElementById("selectBox1");
    const options = Object.keys(optionsPdfMap[insuranceType] || {});
    selectBox1.innerHTML = "<option value=''>Select an Option</option>";
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      selectBox1.appendChild(opt);
    });
  });

  document.getElementById("selectBox1").addEventListener("change", function() {
    const selectedOption = this.value;
    const insuranceType = document.getElementById("insuranceType").value;
    const selectBox2 = document.getElementById("selectBox2");
    const options = Object.keys(optionsPdfMap[insuranceType][selectedOption] || {});
    selectBox2.innerHTML = "<option value=''>Select an Option</option>";
    options.forEach(option => {
      const opt = document.createElement("option");
      opt.value = option;
      opt.textContent = option;
      selectBox2.appendChild(opt);
    });
  });

  document.getElementById("checkNow").addEventListener("click", function() {
    const insuranceType = document.getElementById("insuranceType").value;
    const selectBox1Value = document.getElementById("selectBox1").value;
    const selectBox2Value = document.getElementById("selectBox2").value;
    const pdfPath = optionsPdfMap[insuranceType][selectBox1Value][selectBox2Value];
    if (pdfPath) {
      window.open(pdfPath, "_blank");
    } else {
      alert("No PDF available for the selected options.");
    }
  });