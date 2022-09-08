import React from 'react';
import { Text, View, Image } from 'react-native';

import Img1 from '../../assets/hospedagens/hospedagem01.png';
import Img2 from '../../assets/hospedagens/hospedagem02.png';
import Img3 from '../../assets/hospedagens/hospedagem03.png';
import estilos from './estilos';

export default function TelaHospedagem() {
  return (
    <View style={estilos.container}>
      <Text style={ estilos.titulo }>Pousadas e Hotéis em Paraty</Text>
      <Text style={ estilos.descricao }>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>

      <View style={estilos.card}>
        <Image source={ Img1 } style={ estilos.cardImg }/>
        <Text style={ estilos.cardTitulo }>Pousada Missanga</Text>
        <Text>Valor médio: R$ 350,00</Text>
        <Text>Localização: Próx. à Av. Roberto Silveira</Text>
      </View>
      <View style={estilos.card}>
        <Image source={ Img2 } style={ estilos.cardImg }/>
        <Text style={ estilos.cardTitulo }>Pousada Morro do Forte</Text>
        <Text>Valor médio: R$ 450,00</Text>
        <Text>Localização: Próximo à Praia - Pontal</Text>
      </View>
      <View style={estilos.card}>
        <Image source={ Img3 } style={ estilos.cardImg }/>
        <Text style={ estilos.cardTitulo }>Pousada Porto Imperial</Text>
        <Text>Valor médio: R$ 550,00</Text>
        <Text>Localização: Centro Histórico</Text>
      </View>
    </View>
  );
}