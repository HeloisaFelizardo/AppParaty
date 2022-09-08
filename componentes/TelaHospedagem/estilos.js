import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#beceff',
  },

  titulo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    width: 320,
    marginBottom: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#979797',
    borderRadius: 5,
  },
  cardImg: {
    width: 300,
    height: 50,
    marginBottom: 10,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default estilos;