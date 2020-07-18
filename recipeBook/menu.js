const data = [
    {
        "id": 1,
        "title": "Vegetable Salad with Tuna and Sesame Dressing",
        "img": "./recipeBook/img/tuna-salad.jpg",
        "type": "Entree",
        "main_ingredient": "Tuna",
        "ingredients": [
            {
                "ingredient": "Lettuce"
            },
            {
                "ingredient": " Cherry Tomatoes"
            },
            {
                "ingredient": "Onion"
            },
            {
                "ingredient": "Roasted Sesame Dressing"
            },
            {
                "ingredient": "Egg"
            },
            {
                "ingredient": "Canned Tuna"
            },
            {
                "ingredient":"Sugar"
            },
            {
                "ingredient": "Vinegar"
            },
            {
                "ingredient": "Salt"
            }
        ],
        "instructions": [
            {
                "step": 1,
                "content": "Wash the vegetable, including lettuce, tomatoes and onion, and slice them into edible size."
            },
            {
                "step": 2,
                "content": "Pickle the tomatoes and onion with vinegar, sugar and little salt. Leave for about 20-30 mins."
            },
            {
                "step": 3,
                "content": "Half-boil the egg (5 mins)."
            }, 
            {
                "step": 4,
                "content": "Mix the pickled onion and tomatoes with lettuce."
            },
            {
                "step": 5,
                "content": "Plating: Pour vegetables in a bowl. Put tuna on top of it. Drizzle sesame oil dressing. Carefully cut the egg on top and let the runny yolk fall into the salad."
            }
        ]
    },
  
    {
        "id": 2,
        "title": "Coca-cola glazed Beef Steak with Roasted Potatoes and Stir-fried Mushrooms",
        "main_ingredient": "Beef",
        "img":"./recipeBook/img/steak-coke.jpg",
        "type": "Main",
        "ingredients": [
            {
                "ingredient": "Beef Steak",
                "quantity": 500,
                "unit": "g"
            },
            {
                "ingredient": "Coca Cola",
                "quantity": 1,
                "unit": "bottle"
            },
            {
                "ingredient": "Potatoes",
                "quantity": 3,
                "unit": "pinch"
            },
            {
                "ingredient": "Mushroom",
                "quantity": 100,
                "unit": "g"
            },
            {
                "ingredient": "Salt"
            },
            {
                "ingredient": "Pepper"
            }
        ],
        "instructions": [
            {
                "step": 1,
                "content": "Peel the potatoes and pan fried it with butter"
            },
            {
                "step": 2,
                "content": "Pan fried the beef with butter, seasoned with salt and pepper. Then let the meet rest"
            },
            {
                "step": 3,
                "content": "Pour Coca cola into a pot. Simmer"
            }, 
            {
                "step": 4,
                "content": "Stir fried mushrooms"
            },
            {
                "step": 5,
                "content": "Plating"
            }
        ]
    },
    {
        "id": 3,
        "title": "Apple and Strawberry with Vanilla Ice Cream and Matcha Glaze",
        "type": "Dessert",
        "img": "./recipeBook/img/fruit-matcha.jpg",
        "main_ingredient": "Fruit",
        "ingredients": [
            {
                "ingredient": "Apple"
            },
            {
                "ingredient": "Strawberry"
            },
            {
                "ingredient": "Vanilla Ice Cream"
            },
            {
                "ingredient": "Matcha Ice Cream"
            }
        ],
        "instructions": [
            {
                "step": 1,
                "content": "Peel apples and slice them into edible size."
            },
            {
                "step": 2,
                "content": "Wash the strawberries and cut them in half"
            },
            {
                "step": 3,
                "content": "Put matcha ice cream into the microwave to melt"
            }, 
            {
                "step": 4,
                "content": "Plating: Arrange the apples and strawberries, pour matcha glaze on top and vanilla ice cream beside"
            }
        ]
    },
    {
      "id": 4,
      "title": "Crackling Pork Belly with Rice",
      "type": "Main",
      "img": "./recipeBook/img/crackiling-pork.jpg",
      "main_ingredient": "Pork",
      "ingredients": [
          {
              "ingredient": "Pork Belly"
          },
          {
              "ingredient": "Rice"
          },
          {
              "ingredient": "Salt"
          },
          {
              "ingredient": "Garlic Powder"
          },
          {
              "ingredient": "Five spices powder"
          },
          {
              "ingredient": "Vinegar"
          }
      ],
      "instructions": [
          {
              "step": 1,
              "content": "Slice the underneath part of the pork belly into small cube, so that the meat can absorb the spices"
          },
          {
              "step": 2,
              "content": "Mix salt, sugar, and five spices powder altogether and rub on the underneath side of the meat"
          },
          {
              "step": 3,
              "content": "Rub the uppside part with salt (for taste) and vinegar (to absorb the moisture of the meat), so that the skin can be crackling"
          }, 
          {
              "step": 4,
              "content": "Roast for 30-40 mins with low heat"
          },
          {
            "step": 5,
            "content": "Roast with 10-15 mins with super high heat"
          },
          {
            "step": 6,
            "content": "Plating: Serve with a bowl of rice, vegetables, pickles and an poached egg"
          }
      ]
  }
  ];

entree = [];
main = [];
dessert = [];

for(i=0; i<data.length; i++){
    if(data[i].type=="Entree"){
        entree.push(data[i]);
    } else if(data[i].type=="Main"){
        main.push(data[i]);
    }  else if(data[i].type=="Dessert"){
        dessert.push(data[i]);
    }
}

entree_decision = Math.floor(Math.random()*entree.length);
main_decision = Math.floor(Math.random()*main.length);
dessert_decision = Math.floor(Math.random()*dessert.length);

course = [entree[entree_decision], main[main_decision], dessert[dessert_decision]];

const menuDashboard = document.querySelector('.menu-dashboard');

void function displayRecipes(){

    for(i=0; i<course.length; i++){
  
      const recipeDiv = document.createElement('div');
      recipeDiv.classList.add('recipe-card');
    
      const recipeCard = document.createElement('li');
      recipeCard.classList.add('dish-name');
      recipeCard.innerText = course[i].type + ': ' + course[i].title;
      const imageCard = document.createElement("IMG");
      imageCard.setAttribute("src", course[i].img);
  
      recipeDiv.appendChild(recipeCard);
      recipeDiv.appendChild(imageCard);
  
      
  
      const ingredientDiv = document.createElement('ul');
      ingredientDiv.innerText = 'Ingredients';
      ingredientDiv.classList.add('ingredient-card');
  
  
      for(j=0; j<course[i].ingredients.length; j++){
        const ingredient = document.createElement('li');
        ingredient.innerText = course[i].ingredients[j].ingredient;
        ingredientDiv.appendChild(ingredient);
      }
  
      const instructionsDiv = document.createElement('ul');
      instructionsDiv.innerText = 'Instructions';
      instructionsDiv.classList.add('instruction-card');
  
      for(j=0; j<course[i].instructions.length; j++){
        const instruction = document.createElement('li');
        instruction.innerText = course[i].instructions[j].content;
        instructionsDiv.appendChild(instruction);
      }
  
      recipeDiv.appendChild(ingredientDiv);
      recipeDiv.appendChild(instructionsDiv);
      menuDashboard.appendChild(recipeDiv);
    }
    
  }();
  
  displayRecipes();