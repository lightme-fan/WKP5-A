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
		id: 1596168522409,
	},
];

const boody = document.querySelector('body');
const container = document.querySelector('.container');
const generateButton = document.querySelector('button.generate');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

const renderCard = () => {
	recipes.forEach(recipe => {
		const myHTML =
			`
				<article data-id="${recipe.id}"> 
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
	const addRecipe = `
		<p class="addRecipe">
			<button class="add_recipe">Add new recipe</button>
		</p>	
		`;
	container.insertAdjacentHTML("afterend", addRecipe)
	generateButton.classList.add('remove');
};

const handleMoreInfoBtn = (event) => {
	if (event.target.matches('button.moreInfo')) {
		const parent = event.target.closest('article');
		const id = Number(parent.dataset.id);
		const recipe = recipes.find(idRecipe => idRecipe.id === id);

		innerModal.innerHTML = `
		<div class="article">
			<div class="title_and_author">
				<h1 class="title">${recipe.title}</h1>
				<p class="author">By ${recipe.author}</p>
			</div>
			<p class="recipe_image">
				<img src="${recipe.picture}" alt="recipe Image">
			</p>
			<ul class="time_and_level">
				<li class="timing">Timing: ${recipe.timing}</li>
				<li class="difficulty">Difficulty: ${recipe.difficulty}</li>
			</ul>
			<ul class="steps_and_ingredients">
				<li class="steps">Steps: ${recipe.steps}</li>
				<li class="ingredients">Ingredients: ${recipe.ingredients}</li>
			</ul>
		</div>
			`
		outerModal.classList.add("open");
	}
}

const removeModal = (event) => {
	const isOutdide = !event.target.closest('.modal-inner');
	console.log(isOutdide);
	if (isOutdide) {
		outerModal.classList.remove('open');
	}
};

// Add new recipe
const addRecipeBtn = (event) => {
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

				<fieldset>
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

// handling all buttons
const submitClickButton = (event) => {
    event.preventDefault();
    // Submit button of the form 
    if (event.target.matches('form')) {
        const form = event.target;
        const name = form.name.value;
        const dish = form.dish.value;
        const size = form.size.value;
        const amount = form.amount.value;

        const anOrder = `
        <div class="order">
            <span class="title">${name}</span>
            <button class="details">Details</button>
            <button class="served">Delete order</button>
        </div>
    `;
        orderList.insertAdjacentHTML('afterbegin', anOrder);
        modalOuter.classList.remove('open');
    }
}

generateButton.addEventListener('click', renderCard);
document.addEventListener('click', handleMoreInfoBtn);
outerModal.addEventListener('click', removeModal);
document.addEventListener('click', addRecipeBtn);
