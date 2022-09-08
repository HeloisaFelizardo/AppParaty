import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#f4fbc3',
  },

  titulo: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: 'bold',
    marginBottom: 5,
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
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
  },

  cardTitulo: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },

  cardImg: {
    width: 300,
    height: 80,
  },
});

export default estilos;