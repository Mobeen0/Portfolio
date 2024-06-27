import './styleSheet/newCard.css';

import { FaGithub } from "react-icons/fa";

function NewCard(props) {
  return (
    <div className = "new_Card_container">
    <article class="card__article">
               <div class="card__scale-1"></div>
               <div class="card__scale-2"></div>

               <div class="card__shape-1">
                  <div class="card__shape-2"></div>
                  <div class="card__shape-3">
                     <FaGithub/>
                  </div>
               </div>
   
               <div class="card__data">
                  <h2 class="card__title">Awesome Card 01</h2>
                  
                  <p class="card__description">
                     Gradient card, with bright edges 
                     that gives it a cool look.
                  </p>

                  <a href="#" target="_blank" class="card__button">
                     Continue learning
                  </a>
               </div>
            </article>
    </div>
  )
}

export default NewCard