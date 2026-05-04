import { View, Text, Button } from 'react-native';
import {useState} from 'react';


export default function App() {
  const [like, setLikes] = useState(0);
  return (
    <View style={{marginTop: 50}}>
      <Text>likes: {like}</Text>
      <Button
          title= 'like 👍🏿'
          onPress={() => setLikes(like + 1)}
        />
        <Button
        style = {{height:100}}
          title= 'Dislike 👎🏿'
          onPress={() => setLikes(like - 1)}
          />
    </View>
  );
}


