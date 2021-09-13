const searchFood = ()=>{
    const searchFeild =document.getElementById('search-field');
    const searchText = searchFeild.value;
    searchFeild.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = ' ';
   meals.forEach(meal => {
       
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('col');
        searchResult.appendChild(resultDiv);
        resultDiv.innerHTML = `
            <div onclick="loadMealDetails(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
                    </div>
            </div>
        `
   })
   
    

}
const loadMealDetails = (mealId)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
    .then(response => response.json())
    .then(data => displayMealDetails(data.meals[0]))
}
const displayMealDetails = meal => {
 console.log(meal)
        const detailsContainer = document.getElementById('details-container');
        detailsContainer.textContent = '';
        
        const div = document.createElement('div');
        detailsContainer.appendChild(div);
        div.innerHTML = `   
                <div class="row g-0">
                            <div class="col-md-4">
                            <img src="${meal.strMealThumb} " class="img-fluid rounded-start" alt="...">
                           </div>
                    <div class="col-md-8 ">
                        <div class="card-body">
                            <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
        `

         detailsContainer.appendChild(div);

} 



