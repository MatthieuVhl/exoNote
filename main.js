let  eleves = [
    {
        firstname : "CORBEAU",
        name : "Théo",
        
    },
    {
        firstname : "Verhulst",
        name : "Matthieu",
       
    }
 ];
 let matieres = [
    {
        cours : "français", 
    },
    {
        cours : "anglais" ,
    },
    {
        cours : "histoire", 
    },
    {
        cours : "géographie" ,
    },
    {
        cours :"EPS" ,
    }
 ];


 const eleve = document.getElementById('select-eleve-2');
 const matiere = document.getElementById('select-matiere-2');
 const btn = document.getElementById('btn-submit');
 



 const refreshEleveSelect = () => {
    eleve.innerHTML =`<option value="0">Sélectionnez un élève</option>`;
    eleves.forEach(etudiant =>{
        console.log(etudiant.firstname, etudiant.name);
        eleve.innerHTML += `<option value ="${eleves.indexOf(etudiant)+1}">${etudiant.firstname} ${etudiant.name}</option>`
    });
 }

 btn.addEventListener("click",()=>{
    let firstNameEleve = document.getElementById("nom-eleve").value;
    let nameEleve = document.getElementById("prenom-eleve").value;
    eleves.push({
        firstname : firstNameEleve,
        name : nameEleve
    })
    

    refreshEleveSelect();
    output.textContent="";
 })

 refreshEleveSelect();

 const refreshMatiereSelect = () => {
    matiere.innerHTML =`<option value="0">Sélectionnez une matière</option>`;
    matieres.forEach(allMatiere =>{
        matiere.innerHTML += `<option value ="${matieres.indexOf(allMatiere)+1}">${allMatiere.cours} </option>`
    });
 }

 btn.addEventListener("click",()=>{
    let coursMatiere = document.getElementById("select-matiere").value;
    matieres.push({
        cours : coursMatiere
       
    })
    refreshMatiereSelect();
    output.textContent="";
})
refreshMatiereSelect();


