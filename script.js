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
		timing: '15',
		ingredients: ['eggs', 'salt', 'water'],
		steps: [
			'Put a pan on the fire',
			'Boil water',
			'Add rice in it',
		],
		id: 1596168522407,
	},
];

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

	// Removing the generate button
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
			<form>
				<fieldset>
				<label for="recipe-name" class="recipe-name">What is your recepe name</label>
				<input type="text" id="recipe-name" name="recipe">
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
				<!-- <input type="text" id="difficulty"> -->
				<select name="level" id="difficulty">
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="difficult">Difficult</option>
				</select>
				</fieldset>

				<fieldset class="time">
				<label for="timing">How much does it take?</label>
				<!-- <input type="text" id="timing"> -->
				<select name="time" id="timing">
					<option value="15"> Around 15min</option>
					<option value="30">Around 30min</option>
					<option value="45">Around 45min</option>
					<option value="60">Around 1h</option>
				</select>
				</fieldset>

				<fieldset class="ingredients-field">
					<label for="ingredient">ingredients</label>
					<div class="ingredient" id="ingredient">
						<input type="text" id="ingredient1" name="ingredient1">
					</div>
					<button type="button" class="ingredients-btn">Add a new ingredient to the list</button>
				</fieldset>

				<fieldset>
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

// Function to handle the ingredients button
const handleIngredientBtn = event => {
	event.preventDefault();
	if (event.target.matches('fieldset.ingredients-btn')) {
		const ingredient = event.target;
	 	const fieldset = ingredient.closest('.ingredients-field');
	// 	const listOfIngredients = form.querySelector('.ingredient');
	// 	const lists = listOfIngredients.children.length + 1;
	// 	const newIngredient = `
	// 	<input type="text" id="ingredient${lists}" name="ingredient${lists}">
	// `
	//listOfIngredients.insertAdjacentHTML('beforeend', newIngredient);
	console.log(fieldset);
  }
}

  // A function to handle step button to add new process
/*const handleStepBtn = (event) => {
	const step = document.querySelector('.step');
	const stepNum = step.children.length + 1;
	const newStep = `
	<input type="text" id="step${stepNum}" name="step${stepNum}">
	`
	step.insertAdjacentHTML('beforeend', newStep);
}
*/
// handling all buttons
const submitClickButton = (event) => {
    event.preventDefault();
    // Submit button of the form 
    if (event.target.matches('form')) {
        const forms = event.target;
        const { title, picture, difficulty, timing } = forms;

		const myHtml = `
		<article> 
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
		`;
		container.insertAdjacentHTML('beforeend', myHtml);
		
    }
}

generateButton.addEventListener('click', renderCard);
document.addEventListener('click', handleMoreInfoBtn);
outerModal.addEventListener('click', removeModal);
document.addEventListener('click', addRecipeBtn);
window.addEventListener('click', handleIngredientBtn);
// document.addEventListener('click', addRecipeBtn);
document.addEventListener('submit', submitClickButton);
