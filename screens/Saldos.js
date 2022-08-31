import React from 'react';
import { View, Text ,Button} from 'react-native';
import Titulo from '../components/Titulo';
import Saldo from '../components/Saldo';
import api from '../utils/Api';
export const Saldos = ({route ,navigation}) => { 
const [saldos ,setSaldos] = useState([]);

const ListarSaldos = async () => {

  try{

    const resultado = await api.get("/usuarios"+route.params.id+ "/saldos");
    if(resultado !== null){
        setSaldos(resultado.data);
    }
} catch (error){
    console.log(error);
}
useEffect(() => {
    Listar();
},[]);
}
const SomarSaldos = (...saldos) =>{
   const somados = [];


saldos[0].map((val) => {
somados.push(val.valor);
});

try {
  if(somados !== null){
    somados.reduce((acumulador, valor) => acumulador + valor);
  }


else{
return 0;

}
}
 catch(error){
  return 0;
}


}

useEffect(() => {
ListarSaldos();

},[]);
    return(
    <View >
        <Titulo titulo="Saldos" />
        <Text>{route.params.nome}</Text>
        <Text> TOTAL: R$
        {SomarSaldos(saldos)}</Text>
        {saldos.map((item) =>
        <Saldo 
        key={item.id}
        id={item.id}
        idCliente={route.params.id}
        nome={route.params.nome}
        valor={item.valor}
        navigation={navigation}
 />
    )}
    </View>
   
    )
}
export default Saldos;