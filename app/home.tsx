import { View, Text, Image, ImageBackground, StyleSheet, SectionList } from "react-native";
import { Link } from "expo-router/build/exports";


export default function Home () {
    return (
        <View style={{padding: 10, flex: 1}}>
            <Text>Login com sucesso!</Text>
            <Link href='/'>Voltar para index</Link>
            <Text>porra</Text>
            <View style={styles.item}>
            <Image
          source={{
            uri: 'https://animenew.com.br/wp-content/uploads/2023/04/Ai-Hoshino-gerada-com-Inteligencia-artificial-enlouquece-otakus-jpg.webp',
          }}
          style={[styles.image]}
          />
          <Text
            style={styles.text}>
              Hoshino ai - Oshi no Ko
          </Text>
          </View>
          <View style={styles.item}>
            <Image source={require('./images/sanji.webp')}
            style={styles.image} 
            />
          <Text
            style={styles.text}>
              Sanji - One Piece
          </Text>
          </View>
          <View style={styles.item}>
          <Image source={{
            uri: 'https://pbs.twimg.com/media/GMbAh6lagAAEsYg?format=jpg&name=medium'
          }}
          style={[styles.image]}
          />
          <Text style={styles.text}>
            Frieren
          </Text>
          </View>
          

          <ImageBackground source={{
            uri: 'https://animenew.com.br/wp-content/uploads/2023/04/Ai-Hoshino-gerada-com-Inteligencia-artificial-enlouquece-otakus-jpg.webp'
          }} 
          style={{width: '100%', height: '50%',}}>
    <Text>Linda</Text>
  </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
  image: {
    marginVertical: '1%',
    marginHorizontal: '1%',
    width: 200,
    height: 200,
    marginBottom: 6,
    alignSelf: 'flex-start',
  },
  text: {
    marginVertical: '1%',
    display: 'flex',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  } 
})  