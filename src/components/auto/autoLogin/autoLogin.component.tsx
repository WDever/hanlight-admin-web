import * as React from 'react';

import { usePrevious } from 'lib/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { AppState, status, userActions } from 'store';

const { useEffect } = React;

const { getUser } = userActions;

// class AutoLoginComponent extends React.Component<
//   AutoLoginProps & AutoLoginMethod & RouteComponentProps
// > {
//   public componentDidMount() {
//     const accessToken = localStorage.getItem('accessToken');

//     if (accessToken) {
//       this.props.getUser(accessToken);
//     } else if (
//       this.props.location.pathname !== '/error' &&
//       !this.props.location.pathname.includes('/service')
//     ) {
//       this.props.history.push('/user/login');
//     }
//   }

//   public componentDidUpdate(
//     prevProps: AutoLoginProps & AutoLoginMethod & RouteComponentProps,
//   ) {
//     if (
//       prevProps.getUserStatus === 'pending' &&
//       this.props.getUserStatus === 'success' &&
//       this.props.location.pathname.includes('/user')
//     ) {
//       this.props.history.push('/');
//     }
//   }

//   public render() {
//     return <></>;
//   }
// }

const AutoLoginComponent: React.FC<RouteComponentProps> = ({
  history,
  location,
}) => {
  const dispatch = useDispatch();
  const getUserStatus = useSelector<AppState, status>(
    state => state.user.getUserStatus,
  );
  const prevProps = usePrevious({ getUserStatus });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      dispatch(getUser(accessToken));
    } else if (
      location.pathname !== '/error' &&
      location.pathname.includes('/service')
    ) {
      history.push('/user/login');
    }
  }, []);

  useEffect(() => {
    if (prevProps) {
      if (
        (prevProps.getUserStatus && getUserStatus === 'success') ||
        location.pathname.includes('/user')
      ) {
        history.push('/');
      }
    }
  }, [getUserStatus, location, history]);

  return <></>;
};

export default withRouter(AutoLoginComponent);
