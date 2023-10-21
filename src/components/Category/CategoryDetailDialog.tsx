import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Category from '../../models/Category'
import Box from '@mui/material/Box'

interface CategoryDetailDialogProps {
  open: boolean
  onClose: () => void
  category: Category | null
  onSeeAllMeals: () => void
}

const CategoryDetailDialog: React.FC<CategoryDetailDialogProps> = ({
  open,
  onClose,
  category,
  onSeeAllMeals,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {category && (
        <Box sx={{ backgroundColor: '#8899A6' }}>
          <DialogTitle>
            <Typography variant='h2'>{category.strCategory}</Typography>
          </DialogTitle>
          <DialogContent>
            <Box
              component="img"
              alt="The house from the offer."
              src={category.strCategoryThumb}
            />
            <Typography>{category.strCategoryDescription}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={onSeeAllMeals} variant="contained">
              See all meals from this category
            </Button>
            <Button onClick={onClose} color="error" variant="contained">
              Close
            </Button>
          </DialogActions>
        </Box>
      )}
    </Dialog>
  )
}

export default CategoryDetailDialog
