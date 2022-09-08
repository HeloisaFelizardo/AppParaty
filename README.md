Aplicativo criado com React Native Navigation Drawer

1. Instalando o Expo
A instalação do Expo no computador é feita pelo Node através do comando:
npm install -g expo-cli

2. Criar o projeto
Entrar na pasta que o projeto será criado através do cmd ou terminal do vscode e digitar o comando:
npx create-expo-app <nome do projeto>

3. Instalar as dependências do arquivo package.json através do node:
"dependencies": {
    "@react-navigation/drawer": "^6.4.4",
    "@react-navigation/native": "^6.0.12",
    "expo": "~46.0.9",
    "expo-status-bar": "~1.4.0",
    "react": "18.0.0",
    "react-native": "0.69.5",
    "react-native-gesture-handler": "~2.5.0",
    "react-native-reanimated": "^2.9.1",
    "react-native-safe-area-context": "^4.3.1",
    "react-native-screens": "~3.15.0"
  },

4. Comandos da instalação das bibliotecas via node:
npm install @react-navigation/native

npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

npm install @react-navigation/bottom-tabs

5. Babel.config.js

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};

6. Executar o aplicativo através do comando:
npx expo start

