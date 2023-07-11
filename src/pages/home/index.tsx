import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import Product from 'js/interfaces/Product'

import api from 'src/js/api'


export default function Home() {
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState<Product[]>([])

    const getProduct = () => {
        return api.get('/product').then((response) => {
            setLoading(false)
            setProducts(response.data)
            console.log('Vem sempre')
        }).catch(error => console.error(error.response))
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <View style={styles.container}>
            {loading ? (
                <View style={styles.view}>
                    <Text style={styles.loading}>CARREGANDO....</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.loaded}>
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
                </ScrollView>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',

        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },

    view: {
        height: '100%',
    },

    loading: {
        color: '#fff',
    },

    loaded: {
        gap: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        minWidth: '100%',
        padding: 15,
    },

    item: {
        flex: 1,
        flexDirection: 'column',
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: 100,

        height: 200,
        padding: 5,
        backgroundColor: 'rgba(225, 225, 225, 1)',

        borderWidth: 3,
        borderColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 8,

        shadowColor: '#000',
        elevation: 5,
    },

    id: {},

    title: {
        fontWeight: 'bold',
    },
})
