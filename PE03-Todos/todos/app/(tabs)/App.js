import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import Heading from './Heading'
import Input from './Input'
import Button from './Button'
import TodoList from './TodoList'

let todoIndex = 0

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
    this.submitTodo = this.submitTodo.bind(this)
    this.toggleComplete = this.toggleComplete.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return
    }
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false
    }
    todoIndex++

    const todos = [...this.state.todos, todo]
    this.setState({ todos, inputValue: '' }, () => {
      console.log('State: ', this.state)
    })
  }

  deleteTodo(todoIndex) {
    let { todos } = this.state
    todos = todos.filter((todo) => todo.todoIndex !== todoIndex)
    this.setState({ todos })
  }

  toggleComplete(todoIndex) {
    let todos = this.state.todos
    todos.forEach((todo) => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete
      }
    })
    this.setState({ todos })
  }

  inputChange(inputValue) {
    console.log(' Input Value: ', inputValue)
    this.setState({ inputValue })
  }

  render() {
    const { inputValue, todos } = this.state
    const tabs = ['All', 'Active', 'Complete'];
    const filteredTodos = todos.filter((todo) => {
      if (this.state.type === 'All') return true;
      if (this.state.type === 'Active') return !todo.complete;
      if (this.state.type === 'Complete') return todo.complete;
    });
    return (

      <View style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps='always'
          contentContainerStyle={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)} />
          <TodoList
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
            todos={filteredTodos} />
          <Button submitTodo={this.submitTodo} />

        </ScrollView>
        <View style={styles.tabs}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => this.setState({ type: tab })}
              style={[
                styles.tab,
                this.state.type === tab && styles.activeTab,
              ]}
            >
              <Text
                style={{
                  color: this.state.type === tab ? '#E91E63' : '#000',
                  fontWeight: this.state.type === tab ? 'bold' : 'normal',
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 70
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#E91E63',
  }
});

export default App