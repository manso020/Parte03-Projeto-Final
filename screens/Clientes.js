import { View, Text , Button } from 'react-native';
import Titulo from '../components/Titulo';
import Cliente from '../components/Cliente';
import { useState, useEffect} from 'react';
import api from '../utils/Api';
export const Clientes = ({navigation}) => { 
    return(
    <View >
        <Titulo titulo="Clientes"/>
        <Cliente inicial="P"  nome="Priscilla" valortotal="39,50" navigation={navigation}/>
        <Cliente inicial="S"  nome="Silvia" valortotal="56,00" navigation={navigation}/>
        <Button title="Ir ate saldos"  onPress={() => navigation.navigate('Saldos')}/>
         {clientes.map((item) =>
<Cliente key = {item.id}
id={item.id}
nome={item.nome}
valorTotal={SomarSaldos(item.saldos)}
navigation={navigation}
/>
        )}
    </View>
    )

}

const [clientes, setClientes]=useState([]);

const Listar = async () => {
try{
    const resultado = await AppRegistry.get("/usuarios");
    if(resultado !== null){
        setClientes(resultado.data);
    }
} catch (error){
    console.log(error);
}
useEffect(() => {
    Listar();
},[]);
}

const SomarSaldos =(...saldos) => {
    const somados = [];
    saldos[0].map((val) => {
        somados.push(val.valor);
    });

    try {
        if(somados !== null){
            return 
            somados.reduce((acumulador,valor) => acumulador + valor);
        }
        else{
            return 0;
        }
    } catch(error){
        return 0;
    }
}
export default Clientes;