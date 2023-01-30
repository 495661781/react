import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelsAction, updateCurrentIdAction } from '../store/action/channel';

export default function Channel() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChannelsAction());
  }, [dispatch]);

  const { list, currentId } = useSelector((state) => state.channel);

  return (
    <>
      <ul className="category">
        {list.map((item) => (
          <li
            onClick={() => dispatch(updateCurrentIdAction(item.id))}
            key={item.id}
            className={item.id === currentId ? 'select' : ''}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
