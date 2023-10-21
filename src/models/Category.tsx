interface Category {
  idCategory: number;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}


class CategoryClass implements Category {
  idCategory: number
  strCategory: string
  strCategoryDescription: string
  strCategoryThumb: string

  constructor(
    idCategory: number,
    strCategory: string,
    strCategoryDescription: string,
    strCategoryThumb: string,
  ) {
    this.idCategory = idCategory
    this.strCategory = strCategory
    this.strCategoryDescription = strCategoryDescription
    this.strCategoryThumb = strCategoryThumb
  }
}

export default CategoryClass
