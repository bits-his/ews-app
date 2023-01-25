
import { useCallback, useEffect } from 'react';
import AppNavigation from './AppNavigation/AppNavigation'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { init } from './redux/actions/authActions';
import './Styles/AppStyles.css'

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const initUser = useCallback(() => {
    dispatch(
      init(
        () => {
          navigate(`${location.pathname}${location.search}`);
        },
        () => {
          navigate('')
        }
      )
    );
  }, []);

  useEffect(() => {
    initUser()
  }, [initUser])


  return (
    <>
    {/* <Messages /> */}
    <div>
      <AppNavigation />
    </div>
    </>
    
  )
}

export default App;
