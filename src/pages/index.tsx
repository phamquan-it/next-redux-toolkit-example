// pages/index.tsx
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { increment, decrement, incrementByAmount } from '../redux/slices/someSlice';

const Home = () => {
  const value = useSelector((state: RootState) => state.someSlice.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Value: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
};

export default Home;
