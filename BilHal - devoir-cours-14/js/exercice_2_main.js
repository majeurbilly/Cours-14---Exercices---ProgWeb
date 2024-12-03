const belize = document.getElementById("belize");
const bonaire = document.getElementById("bonaire");
const grandTurk = document.getElementById("grandturk");
const formulaireInscription = document.getElementById("formulaireInscription");
const messageErreur = document.getElementById("messageErreur");
formulaireInscription.onsubmit = ValiderFormulaire_exercice2;

function ValiderFormulaire_exercice2(evenment) {
    let nbChampsInvalides = 0;
    if (!CheckBoxIsValid())
    {
        ++nbChampsInvalides;
        belize.classList.add('border-danger');
        bonaire.classList.add('border-danger');
        grandTurk.classList.add('border-danger');
        messageErreur.textContent = "T'as rien de coché";
    } else {
        belize.classList.remove('border-danger');
        bonaire.classList.remove('border-danger');
        grandTurk.classList.remove('border-danger');
        messageErreur.textContent = "";
    }
    if (nbChampsInvalides !== 0) {
        messageErreur.classList.remove('d-none');
        evenment.preventDefault();
    } else {
        messageErreur.classList.add('d-none');
        alert('Formulaire envoyé')
    }
}
function CheckBoxIsValid() {
    let temp = 0;
    if (!belize.checked && !bonaire.checked && !grandTurk.checked)
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