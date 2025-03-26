import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://conteudo.sesc-rs.com.br/wp-content/uploads/2021/07/felicidade-saude-leveza-iStock-927402888-1.jpg",
                }}
                style={styles.image}
            />
            <Text style={styles.text}>
                A vida é como um raio de sol: ilumina os caminhos e aquece a alma.  
                Aproveite cada momento e espalhe luz por onde passar! ☀️✨
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "pink",
        padding: 20,
    },
    image: {
        width: 300,
        height: 200,
        borderRadius: 15,
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        color: "black",
        textAlign: "center",
        fontStyle: "italic",
        paddingHorizontal: 20,
    },
});
