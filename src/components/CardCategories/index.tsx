import { List, Card, CategoryName } from "./style";
import MassaLogo from '../../assets/massa.svg';
import HamburguerLogo from '../../assets/hamburgue.svg';
import PizzaLogo from '../../assets/pizza.svg';


export function CardCategories() {
  return (
    <List horizontal>
      <Card>
        <MassaLogo />
        <CategoryName>Massas</CategoryName>
      </Card>

      <Card>
        <PizzaLogo />
        <CategoryName>Pizzas</CategoryName>
      </Card>

      <Card>
        <HamburguerLogo width={54} height={44} />
        <CategoryName>Hamburguer</CategoryName>
      </Card>

    </List>
  )
}