import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
//   container: { 
//     flex: 1,
//     paddingTop: 150,
//     backgroundColor: '#ededed'
//   },
//   countContainer: {
//     alignItems: 'center',
//     padding: 10,
//   },
//   countText: {
//     fontSize: 18, 
//     color: 'red'
//  }
// })

// const buttons = StyleSheet.create({
//   primary: {
//     height: 70,
//     backgroundColor: 'red',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 20,
//     marginRight: 20
//   },
//   buttonText: {
//     color: 'white',
//   }
// })

export const Colors = {
    dark: 'black',
    light: 'white',
}

const baseContainerStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
}

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 2
}

const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.dark
    }
})

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        borderColor: Colors.light
    }
})
export default function getStyles(useDarkTheme){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet
}

// export { styles, buttons };