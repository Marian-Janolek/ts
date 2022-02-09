import { useState } from 'react';
import { useQuery } from 'react-query';
import Item from './item/Item';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';

export interface CartItem {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<CartItem[]> => {
  return await (await fetch('https://fakestoreapi.com/products')).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { data, isLoading, error } = useQuery<CartItem[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: CartItem[]) =>
    items.reduce((acc: number, item) => (acc + item.amount, 0));
  const handleAddToCart = (clickedItem: CartItem) => {
    return null;
  };
  const handleRemoveFronCart = () => null;

  if (isLoading) {
    return <LinearProgress />;
  }
  if (error) return <div>something went wrong</div>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 40px;
`;

const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export default App;
