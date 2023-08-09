import { StyleSheet, Text, View } from "react-native"

import Product from 'js/interfaces/Product'

interface Props {
    product: Product
}

const SimpleCard = (props: Props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.id}>{props.product.id}</Text>
            <Text style={styles.title}>{props.product.title}</Text>
            {/* <Text>{product.content}</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 5,
        // borderRadius: 8,
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,
        height: 100,
        // borderWidth: 1,
        // borderColor: '#fff',
        // borderStyle: 'solid',
    },

    id: {},

    title: {
        fontWeight: 'bold',
    },
})


export default SimpleCard