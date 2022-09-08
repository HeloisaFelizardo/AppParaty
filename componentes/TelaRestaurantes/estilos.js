import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: '#ffcda5',
    padding: 20,
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
  cardImg: {
    width: 300,
    height: 80,
    marginBottom: 5,
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default estilos;