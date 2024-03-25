import { StyleSheet, Text, View, Image } from 'react-native';

const DetalhaProduto = (props) => {
return(
<View style={styles.produtoContainer}>
<Image source={{ uri: props.imgUrl }} style={{width: 200 , height: 200}} resizeMode="contain"/>
<Text>Produto: {props.nome}</Text>
<Text>Marca: {props.marca}</Text>
<Text>Preço: {props.preco}</Text>
<Text>Quantidade: {props.quantidade}</Text>
</View>
)}

export default function App() {
return (
<View style={styles.container}>
<View style={styles.row}>
  
<DetalhaProduto 
imgUrl= "https://m.media-amazon.com/images/I/61N5SEKdrXL.__AC_SX300_SY300_QL70_ML2_.jpg" 
nome= "Mochila" 
marca= "Dell" 
preco= "R$99.00" 
quantidade= "100"/> 

<DetalhaProduto 
imgUrl= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfZqOKz9kbthq9HrZOJ9p2p5JA5X_fsI_B6shL8QCXIw&s" 
nome="Mouse"
marca="Razer" 
preco= "R$150.00" 
quantidade= "200"/>

<DetalhaProduto imgUrl= "https://images.kabum.com.br/produtos/fotos/32178/32178_index_g.jpg"  
nome= "Memória Ram" 
marca= "Kingston" 
preco= "R$200.00" 
quantidade= "50"/>

</View>
</View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  produtoContainer: {
    borderWidth: 3,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
  },
});
