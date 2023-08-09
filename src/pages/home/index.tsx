import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'

import Product from 'js/interfaces/Product'

import api from 'src/js/api'
import SimpleCard from 'components/simpleCard'


export default function Home() {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState<Product[]>([])

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
                <View style={styles.loading}>
                    <Text style={styles.loadingText}>CARREGANDO....</Text>
                </View>
            ) : (
                <FlatList 
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => <SimpleCard product={item} />}
                    contentContainerStyle={styles.list}
                    numColumns={2}
                    refreshing={loading}
                    onRefresh={getProduct}
                />
            )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },

    loading: {
        flex: 1,
        flexBasis: "100%",
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },

    loadingText: {
        textAlign: 'center',
        color: '#fff',
    },

    list: {
        gap: 5,
        backgroundColor: '#fac',
        // flexDirection: 'row',
    },
})
