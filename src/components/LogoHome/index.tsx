import { Image, View } from 'react-native';
import logoToDo from "../../../assets/logoToDo.png";
import { styles } from "./style";

export function LogoHome() {
  return (
    <View style={styles.container}>
      <Image
        source={logoToDo}
        style={styles.imageLogo}  
      />
    </View>
  );
};