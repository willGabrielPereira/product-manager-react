import { Text, View } from "react-native"

import Product from 'js/interfaces/Product'
import { styles } from "./style"

interface Props {
    product: Product
}

const SimpleCard = (props: Props) => {
    return (
        <View style={styles.item}>
            <Text style={styles.id}>{props.product.id}</Text>
            <Text style={styles.title}>{props.product.title}</Text>
        </View>
    )
}


export default SimpleCard