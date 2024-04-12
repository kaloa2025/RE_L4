//Rendering a list with FlatList
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import books from '../data/books.json'
import { TouchableOpacity } from 'react-native-gesture-handler'

const BookList = ({navigation}) => {
  return (
    <View>
        <FlatList
            data={books}
            renderItem={({item})=>{
                return <TouchableOpacity onPress={()=>{navigation.navigate('BookDetail')}}>
                <Text>{item.title}</Text>
                </TouchableOpacity>
            }}
            
            keyExtractor={(book)=>{book.title}}
        />
        {/* Given a key prop */}
        
    </View>
  )
}

export default BookList

const styles = StyleSheet.create({})