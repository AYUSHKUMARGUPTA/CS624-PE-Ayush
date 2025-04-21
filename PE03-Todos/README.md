# Todos

# Input
The user interacts with a simple UI to manage a list of tasks. A text input field allows users to enter a new to-do item, and a "Submit" button is used to add the task to the list. Each to-do displays a title along with "Done" and "Delete" buttons. At the bottom, a tab bar offers three filter options: All, Active, and Complete, allowing users to view tasks based on their status.

# Process
When the user types a task and clicks "Submit", the app stores it in the local state and logs it to the console. Each task is an object with `title` and `complete` status. The “Done” button toggles the completion status, while “Delete” removes the task. The tab bar updates the UI based on the selected filter by applying conditions to show all, only completed, or only active tasks.

# Output
The app displays the list of tasks in a styled scrollable view. Tasks marked as complete appear with a strikethrough. Based on the selected filter tab, the UI dynamically updates to show only the relevant tasks. Each action—add, toggle, or delete—instantly updates the interface and logs the event to the terminal, providing both functional interactivity and developer visibility during testing.

![image](./SS_1.png)
![image](./SS_2.png)

## Get started
This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Author
- Name: Ayush Kumar Gupta
- Email: guptaayushkumar@cityuniversity.edu