import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Página Drawer</Text>
            <Text style={styles.subtitle}>
                Aqui você pode navegar entre diferentes seções do aplicativo de maneira prática e eficiente. 
                Use o menu lateral para acessar novos conteúdos!
            </Text>

            <Text style={styles.description}>
                O Drawer Navigation permite uma experiência fluida e organizada, ajudando você a explorar os recursos 
                do aplicativo com facilidade. Deslize a tela para a direita ou toque no menu para começar!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgreen",
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "darkgreen",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: "red",
        textAlign: "center",
        marginBottom: 15,
        paddingHorizontal: 15,
    },
    description: {
        fontSize: 16,
        color: "black",
        textAlign: "center",
        paddingHorizontal: 20,
    },
});
