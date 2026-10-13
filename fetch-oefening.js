async function haalBerichtenOp() {
     document.getElementById("berichten").textContent = "Berichten worden geladen...";

    try{ 

    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    

    if (!response.ok) {
    throw new Error("Er is iets misgegaan met het ophalen van berichten.");

}
 
const berichten = await response.json(); 

if (berichten.length === 0) {
    
document.getElementById("berichten").textContent = "Er zijn geen berichten gevonden.";

    return;
}

console.log(berichten[0].title);

const berichtenDiv = document.getElementById("berichten");

//berichtenDiv.textContent =  berichten[0].title + " | " + berichten[1].title;

berichtenDiv.textContent = "";

berichten.forEach(function(bericht) { // berichten onze array met 5 objecten
                                    // console.log(bericht.title); pak de titek van die ene object
                                    //berichtenDiv.textContent += bericht.title + " | ";
const titel = document.createElement("p");

titel.textContent = bericht.title;//zet titel in die <P>

berichtenDiv.appendChild(titel);//voeg de <P> aan onze <div id=berichten>

});

} catch (error) {
        console.log("Er is een fout opgetreden:", error);
        const berichtenDiv = document.getElementById("berichten");
        berichtenDiv.textContent = "Er konden geen berichten worden opgehaald.";
    }

}
haalBerichtenOp();
