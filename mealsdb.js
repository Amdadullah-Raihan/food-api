const searchFood = ()=>{
    const searchFeild =document.getElementById('search-field');
    const searchText = searchFeild.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
   meals.forEach(meal => {
       console.log(meal)
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('col');
        searchResult.appendChild(resultDiv);
        resultDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb} " class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
                    </div>
            </div>
        `
   })
   
    

}
