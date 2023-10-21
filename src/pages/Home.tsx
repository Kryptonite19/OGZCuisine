import { Button, Container, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const handleListCategories = () => {
    navigate(`/categoryList`)
  }
  return (
    <div>
      <Container
        sx={{ pa: 4, my: 8, backgroundColor: '#22303C' }}
        maxWidth="lg"
      >
        <Typography
          gutterBottom={true}
          variant="h2"
          fontWeight="fontWeightBold"
          sx={{ color: '#FFFFFF' }}
        >
          Welcome to OGZ Cuisine
        </Typography>
        <Typography gutterBottom={true} sx={{ color: '#FFFFFF' }}>
          Welcome to OGZ Cuisine, your ultimate destination for culinary
          inspiration and gastronomic delights. We are passionate about sharing
          the art of cooking, providing you with a diverse collection of recipes
          from around the world. Whether you're a seasoned chef or a kitchen
          novice, you'll find something to satisfy your taste buds. Explore our
          extensive library of recipes, from classic comfort foods to exotic
          dishes that will transport your senses. Get ready to embark on a
          culinary journey with us and unlock the secrets to preparing
          mouthwatering meals that will leave everyone at your table craving for
          more.
        </Typography>

        <Typography sx={{ color: '#FFFFFF' }}>
          {' '}
          Special thanks to{' '}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Meal DB
          </a>{' '}
          for making this culinary adventure possible. Their extensive database
          of recipes has been instrumental in bringing you the delightful world
          of flavors and tastes. We are grateful for their dedication to the art
          of cooking and for making it easier for us to share these delectable
          recipes with you. Here's to the joy of cooking and exploring new
          culinary horizons!
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          sx={{ my: 3 }}
          onClick={() => handleListCategories()}
        >
          Explore Meals Now !!
        </Button>
      </Container>
    </div>
  )
}

export default HomePage
