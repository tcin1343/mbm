// Custom JavaScript functionality for Navigation and Screen Management

class NavigationManager {
    constructor() {
        this.screens = {};
        this.currentScreen = null;
    }

    registerScreen(name, screen) {
        this.screens[name] = screen;
    }

    navigateTo(name) {
        if (this.screens[name]) {
            if (this.currentScreen) {
                this.currentScreen.hide();
            }
            this.currentScreen = this.screens[name];
            this.currentScreen.show();
        }
    }
}

class Screen {
    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(`Showing ${this.name} screen`);
        // Additional code to display the screen
    }

    hide() {
        console.log(`Hiding ${this.name} screen`);
        // Additional code to hide the screen
    }
}

// Example usage
const navigationManager = new NavigationManager();
navigationManager.registerScreen('home', new Screen('Home')); 
navigationManager.registerScreen('about', new Screen('About'));
navigationManager.navigateTo('home'); // Should show Home screen

// To navigate to another screen
// navigationManager.navigateTo('about');
