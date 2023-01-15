import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import FaceIcon from '@material-ui/icons/Face';
import FriendStatusButtons from '@common-components/friend-status-buttons/FriendStatusButtons';
import { useStyles, FriendItemWrapper, FriendLink } from './FriendItem.styles';

const FriendItem = ({
  friendObj,
  message,
  showFriendStatus = false,
  isFriend,
  hasSentRequest,
  isPending,
  onClickItem
}) => {
  const classes = useStyles();
  const { username } = friendObj;

  return (
    <FriendItemWrapper onClick={onClickItem}>
      <FriendLink onClick={onClickItem}>
        <FaceIcon />
        <ListItemText
          classes={{ primary: classes.username }}
          primary={message || username}
        />
      </FriendLink>
      {showFriendStatus && (
        <FriendStatusButtons
          friendObj={friendObj}
          isFriend={isFriend}
          isPending={isPending}
          hasSentRequest={hasSentRequest}
        />
      )}
    </FriendItemWrapper>
  );
};

export default FriendItem;
