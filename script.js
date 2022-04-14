//Funzioni 

function selected(event)
    {
    let image = event.currentTarget;
    let ckbox = image.querySelector('img.checkbox') 

    if(image.classList != "selected" && image.classList != "unselected"){
    image.classList.add("selected")
    ckbox.src = 'images/checked.png';
    }

    else if(image.classList == "unselected"){
    image.classList.replace("unselected" , "selected");
    ckbox.src = 'images/checked.png';
    }
    
    Controlli(image.dataset.questionId,image.dataset.choiceId);
    Risposte(image.dataset.questionId,image.dataset.choiceId);

    }

function Controlli(domanda,id){
  for(const box of images)
  {
      if(box.classList !="selected" && domanda==box.dataset.questionId && id!=box.dataset.choiceId){
          box.classList.add("unselected");
      }

      if(box.classList == "selected" && domanda==box.dataset.questionId && id!=box.dataset.choiceId){
          box.classList.replace("selected","unselected");
         const checkbox = box.querySelector('.checkbox');
         checkbox.src = 'images/unchecked.png';
      }   

  }
      
}
 
function Risposte(domanda,id){
  for(const box of images){
        if(box.classList == "selected" && domanda=="one")
        {
            answers.Ans1=box.dataset.choiceId;
        }

        if(box.classList == "selected" && domanda=="two")
        {
            answers.Ans2=box.dataset.choiceId;
        }

        if(box.classList == "selected" && domanda=="three")
        {
            answers.Ans3=box.dataset.choiceId;
        }
    }
        

  if(answers.Ans1 !== "" && answers.Ans2 !== "" && answers.Ans3 !== ""){      
    
    for (let image of images)
    {
    image.removeEventListener('click', selected);
    }

    if (answers.Ans1 === answers.Ans2 || answers.Ans1 === answers.Ans3 || answers.Ans1 !== answers.Ans2 !== answers.Ans3 ){
        titolo.textContent = RESULTS_MAP[answers.Ans1].title;
        descrizione.textContent = RESULTS_MAP[answers.Ans1].contents;
    }

    else if(answers.Ans2 === answers.Ans3){
        titolo.textContent = RESULTS_MAP[answers.Ans2].title;
        descrizione.textContent = RESULTS_MAP[answers.Ans2].contents;
    }

    result.classList.remove("hidden");

  }
}

function Reset(){

    for (let box of images){
    box.addEventListener('click', selected);
    const checkbox = box.querySelector('.checkbox');     
    checkbox.src = 'images/unchecked.png';
    box.className = "";
    }

    answers.Ans1 = "";
    answers.Ans2 = "";
    answers.Ans3 = "";

    
    result.classList.add("hidden");

}



//Selettori

const reset = document.querySelector("footer button");
const titolo = document.querySelector("footer h1");
const descrizione = document.querySelector("footer p");
const result = document.querySelector("footer div");
const images = document.querySelectorAll('.choice-grid div');

let answers = {
    Ans1:"",
    Ans2:"",
    Ans3:""     
};

//EventListeners

for (let image of images)
{
image.addEventListener('click', selected);
}

reset.addEventListener('click', Reset);
