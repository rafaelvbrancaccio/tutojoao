import React, {useEffect, useState} from 'react';
import {StyledContainer, StyledPageName} from './styles';
import {Header} from './Components';
import {User} from '../../types/User';
import {WatchCard} from '../../components';
import {ActivityIndicator, FlatList} from 'react-native';
import {WatchFace} from '../../types/WatchFace';
import {Api} from '../../services/api';

const Home = () => {
  const [watchList, setWatchList] = useState<WatchFace[] | null>(null);

  useEffect(() => {
    Api.Watchface.getWatchFaceListAsync('tconnectsports').then(wfList => {
      if (wfList) {
        setWatchList(wfList);
      } else {
        setWatchList([]);
      }
    });
  }, []);

  const milena: User = {
    name: 'Milena',
    image: 'https://avatars.githubusercontent.com/u/49095200?v=4',
    email: 'milena@rmail.com',
  };

  return (
    <StyledContainer>
      <Header currentUser={milena} />
      <StyledPageName>Galeria de Mostradores</StyledPageName>
      {watchList == null ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={watchList}
          renderItem={({item, index}) => (
            <WatchCard key={index} watchface={item} />
          )}
        />
      )}
    </StyledContainer>
  );
};

export default Home;
