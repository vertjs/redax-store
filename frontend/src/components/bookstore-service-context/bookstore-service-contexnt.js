import React from 'react'

const {
    Provider: BookStoreProvider, 
    Consumer: BookStoreConsumer
} = React.createContext()

console.log(Provider)
console.log(Consumer)

export {BookStoreProvider, BookStoreConsumer}