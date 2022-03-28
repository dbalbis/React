import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../../styles/_CartWidget.scss';
const CartWidget = (props) => {
  return (
    <>
      <p className="cartCounter">{props.cartNumber}</p>
      <ShoppingCartOutlinedIcon color="white" />
    </>
  );
};

export default CartWidget;
