import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function FICLista({ item }) {

    return (
        <View style={styles.item}>
            <View style={styles.container}>
                <Text style={styles.curso}>{item.nome}</Text>
                <Text style={styles.text}>Área: {item.area}</Text>
                <Text style={styles.text}>Duração: {item.duracao}</Text>
                
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text>Detalhes</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    curso: {
        fontSize: 18,
        fontWeight: '700',
        margin: 10
    },
    text: {
        fontSize: 16,
        margin: 8,
    },
    btn: {
        backgroundColor: '#E0E2DB',
        alignItems: 'center',       
        padding: 10,
        width: 150,
        borderRadius: 50,
        margin: 10        
    },
    btnText: {
        color: '#fff',
        fontFamily: 'Poppins'
    }    
})