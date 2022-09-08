import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#e1e3e4',
  },

  card: {
    width: 320,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
  },

  titulo: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  descricao: {
    textAlign: "center",
    marginBottom: 20,
  },

  imgCapa: {
    width: 300,
    height: 200,
    marginBottom: 20,
  },

  boxBotao: {
    marginBottom: 10,
  },
});

export default estilos;