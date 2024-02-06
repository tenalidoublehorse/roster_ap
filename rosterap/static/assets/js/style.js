
var stateObject = {
    "GUNTUR": {
        "GUNTUR-C": [],
        "VINUKONDA-SC": [],
        "SANTAGUDIPADU-SC": [],
         "YERRAGONDAPALEM-SC": [],
          "BOGGARAM-SP": [],
           "KONDRAMUTLA-SP": [],
            "CHINAKODAMGUNDLA-SP": [],
             "DACHEPALLI-SP": [],
              "MACHERLA-SP": [],
               "NARASARAOPET-SP": [],
                "VEERAVATNAM-SP": [],
                 "VELPUR-SP": [],
                  "R.UMMADIVARAM-SP": [],
                   "ELCHUR-SP": [],
                    "TRIPURANTAKAM-SP ": [],
                     "DARSI-SP": [],
                      "CHINADASALLAPALLE-SP": [],
                       "KANIGIRI-SP": [],
    },
    "TENALI": {
       "TENALI-C": [],
"ONGOLE-C": [],
"NAGARAM-C": [],
"REPALLE-SC": [],
"CHERUKUPALLI-SP": [],
"DUGGIRALA-SP": [],
"KOLLIPARA-SP": [],
"NIZAMPATNAM-SP": [],
"PONNUR-SP": [],
"VIJAYAWADA-SC": [],
"NUZVID-SP": [],
"GUDIVADA-SP": [],
"CHINARAVURU-SP": [],
"UNAVA-SP": [],
"CHILAKALURIPET-SC": [],
"KANDUKUR-SC": [],
"ADDANKI-SP": [],
"CHERUKURU-SP": [],
"CHIRALA-SP": [],
"NENNURUPADU-SP": [],
"KAVALI-SP": [],
"NELLORE-SP": []

    }, 
    "HINDUPUR": {
        "HINDUPUR-C": [],
"SOMANDEPALLI-SC": [],
"NARAYANA NELLORE-SC": [],
"ANANTHAPUR-SP": [],
"DHARMAVARAM-SP": [],
"GAYATRI COLONY-SP": [],
"GUDIBANDA-SP": [],
"NAGALURU POINT CB": [],
"RANANTHAPUR-SP": [],
"S SADLAPALLI-SP": [],
"TADIPATRI-SP": [],
"BURAKAVALKOTA-SP": [],
"TIRUPATHI-SP": [],
"PRODDUTUR-SP": [],
"THIMMASAMUDRAM-SP": [],
"UPPALURU-SP": [],
"KURNOOL-SP": [],
"KALIYANDURG": [],
"MAHANTAPURAM-SC": [],
"ALLAPURAM": [],
"CHINTARLAPALLI-SP": [],
"ENUMALADODI-SP": [],
"KAMBALAPALLI-SP": [],
"MALLIPALLI-SP": [],
"MALAYANUR-SP": [],
"MOPIDI-SP": [],
"RALLA ANANTAPUR-SP": [],
"TENAGAL-SP": [],
"TUMAKUNTA-SP": []

    },
    "VISAKHAPATNAM": {
       "VISHAKAPATNAM-C": [],
"NAUSENA BAUGH-SC": [],
"CHOWDUPALLI-SP": [],
"GAJUWAKA-SP": [],
"HUKUMPETA-SP": [],
"PENDURTHY-SP": [],
"VOMMALI-SP": [],
"PALAKONDA-SP": [],
"VATAPAGU-SP": [],
"GANGADA-SP": [],
"SRUNGAVARAPU KOTA-SP": [],
"VIZIANAGARAM-SP": [],
"GONEDA-C": [],
"JAGGAMPETA-SC": [],
"BALARAM-SC": [],
"ULIMESWARAM-SC": [],
"DOOSARAPAMU-SP": [],
"YELESWARAM-SP": [],
"KATTAMURU-SP": [],
"KAKINADA-C": [],
"MACHAVARAM-SC": [],
"PEDDAPURAM-SC": [],
"BANDANAPUDI-SC": [],
"P.E CHINNAYYAPALEM-SP": [],
"PALLAM-SP": [],
"PITHAPURAM-SP": [],
"TUNI-SP": [],
"YANAM-SP": [],
"RAJAHMUNDRY-C": [],
"DOWLAISWARAM-SP": [],
"KORUKONDA-SP": [],
"CHIKKALA-SP": [],
"ELURU-SP": [],
"KANDRIKAGUDEM-SP": [],
"VISSAKODERU-SP": [],
"TANUKU-SP": []

    },
}
window.onload = function () {
    var countySel = document.getElementById("countySel"),
        stateSel = document.getElementById("stateSel")
    //    districtSel = document.getElementById("districtSel");
    for (var country in stateObject) {
        countySel.options[countySel.options.length] = new Option(country, country);
    }
    countySel.onchange = function () {
        stateSel.length = 1; // remove all options bar first
        // districtSel.length = 0; // remove all options bar first
        if (this.selectedIndex < 1) return; // done 
        for (var state in stateObject[this.value]) {
            stateSel.options[stateSel.options.length] = new Option(state, state);
        }
    }
    
}





// Object representing card data
const cardData = [ 
    {
    name: "Dinesh",
    countySel: "GUNTUR",
    stateSel: "GUNTUR-C",
    date: "25-11-2023",
  },
  {
      name: "Anitha",
      countySel: "TENALI",
      stateSel: "TENALI-C",
      date: "25-11-2023",
    }
    
];

// Function to create cards based on cardData
function createCards(data) {
    const cardContainer = document.getElementById("cardContainer");

    // Iterate through each object in the array
    data.forEach((item) => {
        // Create a card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Create a table for the card
        const table = document.createElement("table");
        table.classList.add("table");

        // Create table header
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        headerRow.innerHTML = `<th scope="col">Name</th>
                               <th scope="col">Area</th>
                               <th scope="col">Satsang</th>
                               <th scope="col">Date</th>`;
        thead.appendChild(headerRow);
        table.appendChild(thead);

        // Create table body
        const tbody = document.createElement("tbody");
        const dataRow = document.createElement("tr");
        dataRow.innerHTML = `<td>${item.name}</td>
                             <td>${item.countySel}</td>
                             <td>${item.stateSel}</td>
                             <td>${item.date}</td>`;
        tbody.appendChild(dataRow);
        table.appendChild(tbody);

        // Append the table to the card and the card to the container
        card.appendChild(table);
        cardContainer.appendChild(card);
    });
}


  // Call the function to create the cards
//   createCards(cardData);
// Event listener for the "Search" button
    document.getElementById("searchBtn").onclick = function () {
        // Get the selected values from the form
        var selectedCounty = document.getElementById("countySel").value;
        var selectedState = document.getElementById("stateSel").value;
        var selectedDate = document.querySelector('input[type="date"]').value;
        var parts = selectedDate.split("-");
        var formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0];
        // Filter cardData based on selected values
        var filteredCards = cardData.filter(function (card) {
            return card.countySel === selectedCounty &&
                card.stateSel === selectedState &&
                card.date === formattedDate;
        });

        // Clear previous cards
        document.getElementById("cardContainer").innerHTML = "";

        // Create and display new cards based on filtered data
        createCards(filteredCards);
    };




