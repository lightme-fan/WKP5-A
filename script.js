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
		id: 1596168522409,
	},
	{
		title: 'My recipe',
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
		id: 1596168522409,
	},
];

const container = document.querySelector('.container');

const renderCard = () => {
	recipes.forEach(recipe => {
		const myHTML =
			`
			<article>
				<div class="title" data-set="${id}">
					<h1>${recipe.title}</h1>
				</div>
				<p class="recipe_image">
					<img src="${recipe.picture}" alt="Recipe Image">
				</p>
				<div class="time_and_level">
					<p class="timing">${recipe.timing}</p>
					<p class="difficulty">${recipe.difficulty}</p>
				</div>
				<div class="btn">
					<button type="button" class="button">
						More Info
					</button>
				</div>
			</article>	
		`
		container.insertAdjacentHTML('beforeend', myHTML);
	});
};

const generateButton = document.querySelector('button.generate');
generateButton.addEventListener('click', renderCard);

const boody = document.querySelector('body');
const handleMoreInfoBtn = (event) => {
	if (event.target.matches("button.button")) {
		const moreInfoBtn = event.target.closest('article');
		// const id = Number(parent.dataset.id);
		// const allRecipe = recipes.find(recipe => recipe.id === id) {
		// openModal(allRecipe);
		recipes.forEach(recipe => {
			container.innerHTML =
				`
				<article>
					<div class="title_and_author" data-set="${id}">
						<h1 class="title">${recipe.title}</h1>
						<p class="author">By ${recipe.author}</p>
					</div>
					<p class="recipe_image">
						<img src="${recipe.picture}" alt="Recipe Image">
					</p>
					<div class="time_and_level">
						<p class="timing">${recipe.timing}</p>
						<p class="difficulty">${recipe.difficulty}</p>
					</div>
					<div class="steps_and_ingredients">
						<p class="steps">${recipe.steps}</p>
						<p class="ingredients">${recipe.ingredients}</p>
					</div>
					<div class="btn">
						<button type="button" class="button">
							More Info
						</button>
					</div>
				</article>	
			`
		});
	}
}
document.addEventListener('click', handleMoreInfoBtn);
