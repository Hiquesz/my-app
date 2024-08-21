import { View, Text } from "react-native";
import { Link } from "expo-router/build/exports";

export default function Home () {
    return (
        <View>
            <Text>Login com sucesso!</Text>
            <Link href='/'>Voltar para home</Link>
        </View>
    )

}