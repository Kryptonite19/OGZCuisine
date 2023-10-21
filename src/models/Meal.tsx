interface Meal {
  idMeal: number
  strMeal: string
  strMealThumb: string
}

class MealClass implements Meal {
  idMeal: number
  strMeal: string
  strMealThumb: string

  constructor(idMeal: number, strMeal: string, strMealThumb: string) {
    this.idMeal = idMeal
    this.strMeal = strMeal
    this.strMealThumb = strMealThumb
  }
}

export default MealClass
