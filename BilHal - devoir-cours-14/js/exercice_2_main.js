const belize = document.getElementById("belize");
const bonaire = document.getElementById("bonaire");
const grandTurk = document.getElementById("grandturk");
const checkboxDiv = document.getElementById("checkboxDiv");
const formulaireInscription = document.getElementById("formulaireInscription");

function ValiderFormulaire_exercice2() {
    let nbChampsInvalides = 0;
    if (!CheckBoxIsValid())
    {
        ++nbChampsInvalides;
        checkboxDiv.classList.add('border-danger');
        messageErreur.textContent += "Rien de cocher";
    } else {
        number1.classList.remove('border-danger');
        number2.classList.remove('border-danger');
    }
    if (nbChampsInvalides !== 0) {
        messageErreur.classList.remove('d-none');
        evenement.preventDefault();
    } else {
        messageErreur.classList.add('d-none');
        alert('Formulaire envoyé')
    }
}

formulaireInscription.onsubmit = ValiderFormulaire_exercice2;

function CheckBoxIsValid() {
    let temp = 0;
    if (belize.value !== null)
    {
        temp++;
    }
    else if (bonaire.value !== null)
    {
        temp++;
    }
    else if (grandTurk.value !== null)
    {
        temp++;
    }
    else if (temp !== 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}