import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import api from 'src/js/api'

interface Category {
    created_at: Date,
    updated_at: Date,
    created_by?: Number,
    updated_by?: Number,

    description: string,
    parent_id?: Number,
    id: string,
}

export default function Home() {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    api.get('/category').then((response) => {
        setLoading(false)
        setCategories(response.data)
    }).catch(error => console.error(error.response))

    return (
        <View style={styles.container}>
            {loading ? (
                <Text>CARREGANDO....</Text>
            ) : (
                <Text>
                    {categories.map((category: Category) => {
                        return (
                            <Text key={category.id}>
                                {category.id}
                                {'\n'}
                                {category.description}
                            </Text>
                        )
                    })}
                </Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000',
        // color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
