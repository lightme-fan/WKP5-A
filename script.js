console.log('HELLO');

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

		// Looping through the ingredients
		const getIngredients = recipe.ingredients;
		getIngredients.forEach(ingredient => {
			return `<p>${ingredient}</p>`;
		});
		
		// Looping through the steps
		const getSteps = recipe.steps;
		getSteps.forEach(step => {
			return `<p>${step}</p>`;
		});

		// Id
		const getId = recipe.id;
		console.log(getId);

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

		// Distructuring the ingredients and steps
		const { ingredients, steps } = parent.dataset;
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
				<p class="steps">Steps:<br> ${steps}</p>
				<p class="ingredients">Ingredients:<br> ${ingredients}</p>
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

// A function to show a form and add new recipes
const addRecipeBtn = (event) => {
	event.preventDefault();
	if (event.target.matches('button.add_recipe')) {
		innerModal.innerHTML = `
        <section>
			<header>
				<h1>Onja CookBook</h1>
			</header>
			<form data-title="tltle" data-title="picture" data-title="author" data-title="difficulty" data-title="timing" data-title="ingredients" data-title="steps">
				<fieldset>
					<label for="recipe-name" class="recipe-name">What is your recipe name</label>
					<input type="text" id="recipe-name" name="title">
				</fieldset>
				
				<fieldset>
					<label for="picture">Picture of the result(URL)</label>
					<input type="url" id="picture" name="picture">
				</fieldset>
				
				<fieldset>
					<label for="author">Who's cooking?</label>
					<input type="text" id="author" name="author">
				</fieldset>
				
				<fieldset class="level">
				<label for="difficulty">What the difficulty?</label>
					<select name="difficulty" id="difficulty">
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="difficult">Difficult</option>
					</select>
				</fieldset>

				<fieldset class="time">
					<label for="timing">How much does it take?</label>
					<select name="timing" id="timing">
						<option value="15"> Around 15min</option>
						<option value="30">Around 30min</option>
						<option value="45">Around 45min</option>
						<option value="60">Around 1h</option>
					</select>
				</fieldset>

				<fieldset class="ingredient-field">
					<label for="ingredient">ingredients</label>
					<div class="ingredient" id="ingredient">
						<input type="text" id="ingredient1"  name="ingredient1">
					</div>
					<button type="button" class="ingredient-btn">Add a new ingredient to the list</button>
				</fieldset>

				<fieldset class="step-field">
					<label for="step">Steps</label>
					<div class="step" id="step">
						<input type="text" id="step1" name="step1">
					</div>
					<button type="button" class="step-btn">Add a new step to the list</button>
				</fieldset>

				<div class="submit">
					<button type="submit" class="submit-btn">Submit</button>
				</div>
			</form>

		</section>

    `;
    outerModal.classList.add("open");
	}
}

// Function to handle the ingredients button to add new input steps
const handleIngredientBtn = event => {
	event.preventDefault();
	if (event.target.matches('fieldset.ingredient-btn')) {
		const ingredient = event.target;
	 	const fieldset = ingredient.closest('.ingredient-field');
		const listOfIngredients = form.querySelector('.ingredient');
		const lists = listOfIngredients.children.length + 1;
		const newInputIngredient = `
		<input type="text" id="ingredient${lists}" name="ingredient${lists}">
	`
	listOfIngredients.insertAdjacentHTML('beforeend', newInputIngredient);
	console.log(fieldset);
  }
}

  // A function to handle step button to add new input steps
const handleStepBtn = (event) => {
	event.preventDefault();
	if (event.target.matches('fieldset.step-btn')) {
		const steps = event.target;
	 	const fieldset = ingredient.closest('.step-field');
		const listOfSteps = steps.querySelector('.steps');
		const lists = listOfSteps.children.length + 1;
		const newInputStep = `
		<input type="text" id="ingredient${lists}" name="ingredient${lists}">
	`
	listOfSteps.insertAdjacentHTML('beforeend', newInputStep);
	console.log(fieldset);
  }
}

// handling submit buttons
const submitClickButton = (event) => {
    event.preventDefault();
	if (event.target.matches('button.submit-btn')) {
		const forms = event.target.closest('form');
		const { title, picture, timing, difficulty } = forms.dataset;
		const myHTML =
			`
				<article 
					data-ingredients="${ingredients}"
					data-steps="${steps}" 
					data-id="${id}"
				> 
					<div class="title">
						<h1>${title.value}</h1>
					</div>
					<p class="recipe_image">
						<img src="${picture.value}" alt="Recipe Image">
					</p>
					<div class="time_and_level">
						<p class="timing">Timing: ${timing.value}</p>
						<p class="difficulty">Difficulty: ${difficulty.value}</p>
					</div>
					<div class="btn">
						<button type="button" class="moreInfo">
							More Info
						</button>
					</div>
				</article>	
		`
		container.insertAdjacentHTML('beforeend', myHTML);
	}
		
}

// Add event listner for the generate button
generateButton.addEventListener('click', renderCard);

// Add event listner for more Information
document.addEventListener('click', handleMoreInfoBtn);

// Add event listner for removing modal
outerModal.addEventListener('click', removeModal);

// Add event listner to add new recipes
document.addEventListener('click', addRecipeBtn);

// Add event listner to add more inputs when click ingredient button
window.addEventListener('click', handleIngredientBtn);

// Add event listner to add more inputs when click step button
document.addEventListener('click', addRecipeBtn);

// Add event listner to show the new recipe to the container when submit the form
window.addEventListener('submit', submitClickButton);
