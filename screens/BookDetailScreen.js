import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BookDetailScreen = ({route,navigation}) => {
    const {book}=route.params
  return (
    <View>
      <Text>{book.title} - {book.author}</Text>
    </View>
  )
}

export default BookDetailScreen

const styles = StyleSheet.create({})