import React from "react";

import ThemeContext from "./theme";

const UseContext = ({ children }) => (
    <ThemeContext.Provider value={{ primaryColor: "blue" }}>
        {children}
    </ThemeContext.Provider>
);

export default UseContext;