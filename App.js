import { StyleSheet, Text, View } from 'react-native';

const DetalhaProduto = (props) => {
return(
<View style={styles.container}>
<Text>Produto: {props.nome}</Text>
<Text>Marca: {props.marca}</Text>
<Text>Preço: {props.preco}</Text>
</View>
)}

export default function App() {
return (
<View>
<DetalhaProduto nome= "Mochila" marca= "Dell" preco= "R$99.00"/> 
<DetalhaProduto nome="Mouse" marca="Razer" preco= "R$150.00"/>
<DetalhaProduto nome= "Memória Ram" marcas= "Kingston" preco= "R$200.00"/>
</View>
)};

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
