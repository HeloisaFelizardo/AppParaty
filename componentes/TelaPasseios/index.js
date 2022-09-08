import React from 'react';
import { Text, View, Image } from 'react-native';

import Img1 from '../../assets/passeios/passeio01.png';
import Img2 from '../../assets/passeios/passeio02.png';
import Img3 from '../../assets/passeios/passeio03.png';
import estilos from './estilos';

export default function TelaPasseios() {
  return (
    <View style={estilos.container}>
      <Text style={ estilos.titulo }>Passeios em Paraty</Text>
      <Text style={ estilos.descricao }>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja dois exemplos:</Text>

      <View style={estilos.card}>
        <Text style={ estilos.cardTitulo }>Tirolesa</Text>
        <Image source={ Img1 } style={ estilos.cardImg }/>
      </View>
      <View style={estilos.card}>
        <Text style={ estilos.cardTitulo }>Rafting</Text>
        <Image source={ Img2 } style={ estilos.cardImg }/>
      </View>
      <View style={estilos.card}>
        <Text style={ estilos.cardTitulo }>Canoagem no mangue</Text>
        <Image source={ Img3 } style={ estilos.cardImg }/>
      </View>

    </View>
  );
}