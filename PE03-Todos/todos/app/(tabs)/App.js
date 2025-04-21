import React, { Component } from 'react';
import { View, ScrollView, StyleSheet,Button, TouchableOpacity, Text} from 'react-native';
import Heading from './Heading';
import Input from './Input';
class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    }
  }

  inputChange(inputValue) {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  }
  submitTodo = () => {
    const { inputValue, todos } = this.state;
    if (inputValue.trim() === '') return;

    const newTodo = {
      title: inputValue,
      complete: false,
    };

    this.setState({
      todos: [...todos, newTodo],
      inputValue: '',
    }, () => {
      console.log('Updated State:', this.state);
      console.log('Just Added Todo:', newTodo);
    });
    // console.log('State:', this.state);
  };
  toggleComplete = (index) => {
    const todos = [...this.state.todos];
    todos[index].complete = !todos[index].complete;
    this.setState({ todos });
  };

  deleteTodo = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };

    renderTodos = () => {
    const { todos, type } = this.state;

    const filteredTodos = todos.filter((todo) => {
      if (type === 'All') return true;
      if (type === 'Active') return !todo.complete;
      if (type === 'Complete') return todo.complete;
    });

    return filteredTodos.map((todo, index) => (
      <View key={index} style={styles.todoRow}>
        <Text
          style={[
            styles.todoText,
            { textDecorationLine: todo.complete ? 'line-through' : 'none' },
          ]}
        >
          {todo.title}
        </Text>
        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => this.toggleComplete(index)}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => this.deleteTodo(index)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    ));
  };
  renderTabBar = () => {
    const tabs = ['All', 'Active', 'Complete'];
    return (
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
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input inputValue={this.state.inputValue} inputChange={text => this.inputChange(text)} />
          <View style={styles.buttonContainer}>
            <Button title="Submit" onPress={this.submitTodo} />
          </View>
          {this.renderTodos()}
        </ScrollView>
        {this.renderTabBar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  todoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginRight: 8,
  },
  doneText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#E91E63',
  }
});
export default App;