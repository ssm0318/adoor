import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import { useSelector } from 'react-redux';
import FriendItem from '@common-components/friend-item/FriendItem';
import { useStyles, SearchCard } from './SearchDropdownList.styles';

const SearchDropdownList = () => {
  const classes = useStyles();
  const results = useSelector((state) => state.searchReducer.searchObj.results);

  const userList = results?.map((user, index) => (
    <FriendItem key={user.id + index.toString()} friendObj={user} isWidget />
  ));

  return (
    <SearchCard variant="outlined">
      <CardContent className={classes.searchDropdownContent}>
        {userList}
      </CardContent>
    </SearchCard>
  );
};

export default SearchDropdownList;
