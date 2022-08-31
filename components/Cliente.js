import React from 'react';
import { View,Text,Button,Alert} from 'react-native';
import api from '../utils/Api'
export const Cliente = (props) => {

  const Deletar = (id) =>{
    api.delete('usuarios/'+id).then (() =>props.navigation.push('Clientes'));
  }
    return(
<View>
<text>{props.inicial}</text>
<TouchableOpacity onPress={() => {
  props.navigation.push('Saldos' , {id : props.id,nome: props.nome})}}>

    <Text>{props.nome}</Text>
    <Text>R${props.valortotal}</Text>
    </TouchableOpacity>

<Button title="remover" onPress={() => { Deletar(props.id)}}
/>
</View>

    )
}
export default Cliente;