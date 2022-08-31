import React from 'react';
import { View,Text,Button} from 'react-native';
import api from "../utils/Api";
export const Saldo= (props) => {
const Deletar = (id) => {

  api.delete('usuarios/' +props.idCliente+ '/saldos/'+id)


   .then(() =>
props.navigation.push('Saldos' , {id : idCliente, nome : props.nome}));
}
    return(
<View>
<text>{props.valor}</text>

<Button title="remover" onPress={() => Deletar(props.id)} />
</View>

    )
}
export default Saldo;