
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




