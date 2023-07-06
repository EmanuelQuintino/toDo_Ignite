import { Image, View } from 'react-native';
import { styles } from "./style";

export function LogoHome() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/logoToDo.png")}
        style={styles.imageLogo}
      />
    </View>
  );
};