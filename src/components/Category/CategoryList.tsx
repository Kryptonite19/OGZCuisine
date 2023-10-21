import { useEffect, useState } from 'react'
import axios from 'axios'
import Category from '../../models/Category'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CategoryDetailDialog from './CategoryDetailDialog'
import { useNavigate } from 'react-router-dom'

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://www.themealdb.com/api/json/v1/1/categories.php',
      }

      try {
        const response = await axios.request(options)
        const categoryData = response.data.categories as Category[]
        console.log(categoryData)
        setCategories(categoryData)
      } catch (error) {
        console.error('Error fetching food categories:', error)
      }
    }

    fetchData()
  }, [])

  const handleCategoryDetailClick = (category: Category) => {
    setSelectedCategory(category)
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
    setSelectedCategory(null)
  }
  const navigate = useNavigate()
  const handleSeeAllMeals = () => {
    if (selectedCategory) {
      navigate(`/category/${selectedCategory.idCategory}`, {
        state: { category: selectedCategory },
      })
    }
    console.log('SEE ALL MEALS XDDD')
  }
  return (
    <Container sx={{ py: 2, my: 8, backgroundColor: '#22303C' }} maxWidth="lg">
      <Typography
        variant="h2"
        sx={{ my: 2, color: '#FFFFFF', fontWeight: 'bold' }}
      >
        Food Categories
      </Typography>
      <Grid container spacing={4}>
        {categories.map((category) => (
          <Grid item key={category.idCategory} xs={12} sm={6} md={4}>
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
                image={category.strCategoryThumb}
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
                  {category.strCategory}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'flex-end' }}>
                <Button
                  size="small"
                  onClick={() => handleCategoryDetailClick(category)}
                  variant="contained"
                >
                  Show More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <CategoryDetailDialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        category={selectedCategory}
        onSeeAllMeals={handleSeeAllMeals}
      />
    </Container>
  )
}

export default CategoryList
