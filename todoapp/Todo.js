import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, TextInput } from "react-native";

const {width, height} = Dimensions.get("window");

export default class ToDo extends React.Component{
    state = {
        isEditing: false,
        isCompleted: false,
        todoValue: ""
    };

    render(){
        const {isCompleted, isEditing, todoValue} = this.state;
        const {text} = this.props;

        return(
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this.toggleComplete}>
                        <View style={[styles.circle, isCompleted ? styles.completedCircle : styles.uncompletedCircle]}/>
                    </TouchableOpacity>
                    {isEditing ? (
                        <TextInput style={[styles.text, isCompleted ? styles.isCompletedText : styles.uncompletedText]} 
                            value={todoValue} multiline={true} onChangeText={this.controllInput} returnKeyType={"done"}
                            onBlur={this.finishEditing}/>
                    ) : (
                        <Text style={[styles.text, isCompleted ? styles.isCompletedText : styles.uncompletedText]}>
                            {text}
                        </Text>)
                    }
                </View>
                {isEditing ? (
                <View style={styles.action}>
                    <TouchableOpacity onPressOut={this.finishEditing}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✅</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    ):(
                <View style={styles.action}>
                    <TouchableOpacity onPressOut={this.startEditing}>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>✏</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.actionContainer}>
                            <Text style={styles.actionText}>❌</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                )}
        </View>
        );
    }

    toggleComplete=()=>{
        this.setState(prevState=>{
            return {isCompleted: !prevState.isCompleted}
        });
    };

    startEditing=()=>{
        const {text} = this.props;
        this.setState({isEditing: true, todoValue: text});
    };

    finishEditing=()=>{
        this.setState({isEditing: false});
    };

    controllInput=(text)=>{
        this.setState({todoValue: text});
    };
}

const styles = StyleSheet.create({
    container: {
        width: width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontWeight: "600",
        fontSize: 20,
        marginVertical: 20
    },
    circle: {
        width: 30, 
        height: 30,
        borderRadius: 15,
        borderWidth: 3,
        marginRight: 20
    },
    completedCircle: {
        borderColor: "#bbb"
    },
    uncompletedCircle: {
        borderColor: "skyblue"
    },
    isCompletedText: {
        color: "#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText: {

    },
    column: {
        flexDirection: "row",
        alignItems: "center",
        width: width/2
    },
    action: {
        flexDirection: "row"
    },
    actionContainer:{
        marginVertical: 10,
        marginHorizontal: 10
    },
    input:{
        marginVertical: 20,
        width: width / 2
    }
});