var uur = 17;
if (uur < 18) {
    groet = "goedendag";
};

var uur = 19;
if (uur < 18) {
    groet = "goedendag";
} else {
    groet = "goedenavond";
};

var uur = 20;
if (uur < 12) {
    groet = "goedenmorgen";
} else if (uur < 18) {
    groet = "goedemiddag";
} else {
    groet = "goedenavond";
};

var ingevoerdGetal = 3;
switch (ingevoerdGetal) {
    case 0:
        getal = "Nul";
        break;
    case 1:
        getal = "Een";
        break;
    case 2:
        getal = "Twee";
        break;
    case 3:
        getal = "Drie";
        break;
    case 4:
        getal = "Vier";
        break;
    default:
        getal = "Hoger dan vier";
};

switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}

for (i = 0; i < 5; i++) {
    text += "Het getal is " + i + "<br>";
}

while (i < 10) {
    text += "Het getal is " + i;
    i++;
}

