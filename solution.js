const recipes = [
    {
        title: 'Eggs',
        picture: 'https://bit.ly/2ZXyiKI',
        author: 'Loïc',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Put a pan on the fire',
            'Crack the eggs on it',
            'Wait, put them out',
            'Add some salt on it',
        ],
        id: 1596168482053,
    },
    {
        title: 'Pasta',
        picture: 'https://bit.ly/2Xim3GH',
        author: 'Clara',
        difficulty: 'easy',
        timing: '15',
        ingredients: ['eggs', 'salt', 'water'],
        steps: [
            'Boil water',
            'Add the pasta',
            'Add ingredients',
            'Add some salt on it',
        ],
        id: 1596168522409,
    },
    {
        title: 'Rice',
        picture: 'https://bit.ly/31emq6u',
        author: 'Peta',
        difficulty: 'Medium',
        timing: '30',
        ingredients: ['water', 'rice'],
        steps: [
            'Put a pot on the fire',
            'Boil water',
            'Add rice in it',
        ],
        id: 1596168522407,
    },
];

// Grabing all usefull elements
const boody = document.querySelector('body');
const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

// Rendering the recipe cards
const renderCard = (e) => {
    // Looping through the recipes
    recipes.forEach(recipe => {
        // HTML of the recipe cards 
        const myHTML =
            `
				<article 
					data-ingredients="${recipe.ingredients}"
					data-steps="${recipe.steps}" 
					data-id="${recipe.id}"
				> 
					<div class="title">
						<h1>${recipe.title}</h1>
					</div>
					<p class="recipe_image">
						<img src="${recipe.picture}" alt="Recipe Image">
					</p>
					<div class="time_and_level">
						<p class="timing">Timing: ${recipe.timing}</p>
						<p class="difficulty">Difficulty: ${recipe.difficulty}</p>
					</div>
					<div class="btn">
						<button type="button" class="moreInfo">
							More Info
						</button>
					</div>
				</article>	
		`
        container.insertAdjacentHTML('beforeend', myHTML);

    });

    // This is a button to add new recipes
    const addRecipe = `
		<p class="addRecipe">
			<button class="add_recipe">Add new recipe</button>
		</p>	
		`;
    container.insertAdjacentHTML("afterend", addRecipe)

    // Removing the generate button from the container
    generateButton.classList.add('remove');
};

// A functio to handling the more info button
const handleMoreInfoBtn = (event) => {
    event.preventDefault();
    if (event.target.matches('button.moreInfo')) {
        const parent = event.target.closest('article');
        const id = Number(parent.dataset.id);
        const recipe = recipes.find(idRecipe => idRecipe.id === id);

        innerModal.innerHTML = `
		<div class="article">
			<div class="title_and_author">
				<h2 class="title">${recipe.title}</h2>
				<p class="author">By ${recipe.author}</p>
			</div>
			<p class="recipe_image">
				<img src="${recipe.picture}" alt="recipe Image">
			</p>
			<ul class="time_and_level">
				<li class="timing">Timing: ${recipe.timing}</li>
				<li class="difficulty">Difficulty: ${recipe.difficulty}</li>
			</ul>
			<div class="steps_and_ingredients">
				<div class="steps">Steps:${recipe.steps.map(step => `<p class="steps">${step}</p>`).join('\n')}</div>
				<div class="ingredients">Ingredients:${recipe.ingredients.map(ingredient => `<p class="ingredients">${ingredient}</p>`).join('\n')}</p>
			</div>
		</div>
			`
        outerModal.classList.add("open");
    }
}

// Remove modal
const removeModal = (event) => {
    const isOutside = !event.target.closest('.modal-inner');
    if (isOutside) {
        outerModal.classList.remove('open');
    }
};

// Add event listner for the generate button
generateButton.addEventListener('click', renderCard);

// Add event listner for more Information
document.addEventListener('click', handleMoreInfoBtn);

// Add event listner for removing modal
outerModal.addEventListener('click', removeModal);

