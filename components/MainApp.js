import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'

const MainApp = () => {
    const [isClick, setIsClick] = useState(false)
    const [ageText, setAgeText] = useState("")

    const handleClick = () => {
        setIsClick(isClick === false ? true : false)
    }

    return (
        <ScrollView pagingEnabled={true}  >
            <View style={styles.textViewContainer}>
                <Text><h4>Name</h4></Text>
                <TextInput
                    style={{ height: "40px", borderColor: "green", borderWidth: 1 }}
                    defaultValue="Type here"
                />
            </View>
            <View style={styles.textViewContainer}>
                <Text><h4>Age</h4></Text>
                <TextInput
                    style={{ height: "40px", borderColor: "green", borderWidth: 1 }}
                    placeholder="Enter Your Age"
                    defaultValue={ageText}
                    onChangeText={text => setAgeText(text)}
                />
                <Text style={{padding: "10px", fontSize: "42", borderColor: "green",}}>
                    {ageText.split("").map((word) => word && '🍕').join(" ")}
                </Text>
            </View>
            <View>
                <Image
                    source={{
                        uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                    }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
            <>
                <Button title='Submit' onPress={handleClick}>
                </Button>
            </>

            {
                isClick && (
                    <View style={styles.textButtonContainer}>
                        <h2>Submitted</h2>
                    </View>
                )
            }

        </ScrollView>
    )
}

export default MainApp

const styles = StyleSheet.create({
    textViewContainer: {
        width: "100%",
        marginTop: "2rem",
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center"
    },

    textButtonContainer: {
        width: "200px",
        height: "10px",
        border: "2px solid black",
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
    }
})