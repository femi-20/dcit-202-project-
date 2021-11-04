import react from "react";
import {view,text,ImageBackground} from "react-native";
import styles from "./style";

const ShoeItem = (props) => {
    return (
        <View style={styles.pcontainer}>
      <ImageBackground
      
       source={require ('../../assets/welcome image.jpg')}
       style={styles.image}
       />
      
    <View style={styles.titles}>
      <Text style={styles.title}>JORDAN 1   </Text>
      <text style={styles.subtitle}> starting from 40 Dollars usd </text>
    </View>
    </View>



    );



};
export default ShoeItem;