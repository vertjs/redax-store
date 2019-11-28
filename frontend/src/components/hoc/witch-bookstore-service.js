import React from 'react'
import BookStoreProvider from '../bookstore-service-context'

export default function witchBookStoreService() {
    (Wrapped) => {
        return (props) => {
            return (
                <BookStoreProvider>
                    {
                        (bookstoreService) => {
                            return (
                                <Wrapped {...props} bookstoreService={bookstoreService} />
                            )
                        }
                    }
                </BookStoreProvider>
            )
        }
    }
}