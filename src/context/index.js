import React from 'react';
export const ThemeContext = React.createContext({
    appTheme: "Night's Watch",
    changeAppTheme : (theme) => this.setState({appTheme: theme})
});