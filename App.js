import { StyleSheet, Text, View, ScrollView } from "react-native";
import { ProductCard } from "./src/components/ProductCard";

import {ListProducts} from './src/hooks/ListProducts'
export default function App() {
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Pizzas</Text>
        {ListProducts.map((product)=>{
          return(
            <ProductCard imageUrl={product.imgUrl} name={product.name} price={product.price}/>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "100%",
    paddingVertical: 50,
  },
  title:{
    padding: 30,
    fontWeight: "bold",
    fontSize: 30
  },
  scroll:{
    width: "100%",
    height: "100%",
  }
});
