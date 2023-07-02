import { Image, View } from 'react-native';
import logoToDo from "../../../assets/logoToDo.png";

export function LogoHome() {
  return (
    <View>
      <Image source={logoToDo}/>
    </View>
  );
};