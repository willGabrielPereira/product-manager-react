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
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
                    {product.map((product: Product) => {
                        return (
                            <View key={product.id} style={styles.item}>
                                <Text style={styles.id}>{product.id}</Text>
                                <Text style={styles.title}>{product.title}</Text>
                                {/* <Text>{product.content}</Text> */}
                            </View>
                        )
                    })}
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
        flex: 1,
        backgroundColor: '#000',
        // color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

        flexDirection: 'column',
    },

    view: {
        height: '100%',
    },

    loading: {
        color: '#fff',
    },

    loaded: {
        flex: 1,
        flexDirection: 'column',
        // justifyContent: 'space-between',
        gap: 5,
        backgroundColor: '#fac',
    },

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
