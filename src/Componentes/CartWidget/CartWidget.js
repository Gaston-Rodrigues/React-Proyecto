import { BsCart2 } from "react-icons/bs"
import './styles.css';

function CartWidget() {
  return (
    <div className="CartWidget">
     <BsCart2 className="icono" />
      <p className='numeroCart'>1</p>

    </div>

  );
}
export default CartWidget;