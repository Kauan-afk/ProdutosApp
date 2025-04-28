import { Image, StyleSheet, Text, View } from "react-native";

import calabresa from '../assets/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024.jpg'

export function ProductCard({imageUrl, name, price}) {
    return(
        <View style={style.container}>
            <Image style={style.images} source={imageUrl}/>

            <Text style={style.title}>{name}</Text>
            <Text style={style.text}>R$ {price}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        
        
        padding: 30,
        width: "100%",
        
        height: 525,
        marginVertical: 10,
        
        
    },

    
    images: {
        width: '100%',
        borderRadius: 10,
        maxHeight: 400,
        elevation: 20,
        shadowColor: '#292929'
    },
    
    title: {
        fontWeight: "bold",
        fontSize: 25        
    },
    text: {
        fontSize: 17
    }
})