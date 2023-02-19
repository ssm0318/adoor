import React, { useEffect } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import { useHistory } from 'react-router';
import UserProfileItem from '@common-components/user-profile-item/UserProfileItem';
import { useSelector } from 'react-redux';
import { useStyles, SmallFontBottomNavAction } from './MobileFooter.styles';

export default function MobileFooter({ notiBadgeInvisible }) {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState('/home');
  const { pathname } = window.location;
  const currentUser = useSelector((state) => state.userReducer.currentUser);

  useEffect(() => {
    if (
      [
        '/home',
        '/anonymous',
        '/questions',
        '/notifications',
        '/my-page'
      ].includes(pathname)
    ) {
      setValue(pathname);
    } else {
      setValue(null);
    }
  }, [pathname]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        history.push(newValue);
        setValue(newValue);
      }}
      id="bottom-nav"
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        value="/home"
        label="Home"
        icon={<HomeIcon />}
        className={`${classes.icon} link`}
      />
      <BottomNavigationAction
        value="/anonymous"
        label="익명피드"
        icon={<SupervisorAccountIcon />}
        className={`${classes.icon} link`}
      />
      <SmallFontBottomNavAction
        value="/questions"
        label="오늘의 질문"
        icon={<LiveHelpIcon />}
        className={`${classes.icon} link`}
        style={{ padding: '6px 4px', fontSize: '0.7rem' }}
      />
      <BottomNavigationAction
        value="/notifications"
        label="알림"
        icon={
          <Badge
            variant="dot"
            invisible={notiBadgeInvisible}
            color="primary"
            overlap="rectangular"
          >
            <NotificationsIcon />
          </Badge>
        }
        className={`${classes.icon} link`}
      />
      <BottomNavigationAction
        value="/my-page"
        label="MY"
        icon={
          <UserProfileItem
            userName={currentUser?.username}
            profileImageUrl={currentUser?.profile_image}
            width={20}
            height={20}
          />
        }
        className={`${classes.icon} link`}
      />
    </BottomNavigation>
  );
}
