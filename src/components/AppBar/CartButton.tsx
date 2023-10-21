import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

const CartButton = () => {
  const handleCart = () => {
    console.log('Cart Clicked')
  }
  return (
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={handleCart}
      color="inherit"
    >
      <Badge badgeContent={0} color="primary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
}

export default CartButton
