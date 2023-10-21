import { useLocation } from 'react-router-dom'
import Category from '../models/Category'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Meal from '../models/Meal'

const CategoryPage = () => {
  const location = useLocation()
  const category: Category = location.state?.category
  console.log('KATEGORİ', category)
  const [meals, setMeals] = useState<Meal[]>([])
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`,
        )
        const mealData = response.data.meals as Meal[]
        console.log('API Response:', response.data)
        setMeals(mealData) // Set the meals in your state
      } catch (error) {
        console.error('Error fetching meals:', error)
      }
    }

    if (category) {
      fetchMeals()
    }
  }, [category])
  return (
    <div>
      <Container
        sx={{ py: 2, my: 8, backgroundColor: '#22303C' }}
        maxWidth="lg"
      >
        <Typography variant="h2" sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>
          {category.strCategory} Dishes
        </Typography>
        <Grid container spacing={4}>
          {meals.map((meal) => (
            <Grid item key={meal.idMeal} xs={12} sm={6} md={4}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#8899A6',
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    pt: '60.25%',
                    mx: 2,
                    my: 2,
                  }}
                  image={meal.strMealThumb}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h4"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {meal.strMeal}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                  <Button size="small" variant="contained">
                    Show More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default CategoryPage
