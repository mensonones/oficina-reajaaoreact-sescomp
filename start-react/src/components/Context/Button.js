import React from "react";

import ThemeContext from "./theme";

const Button = () => (
    <ThemeContext.Consumer>
        {value => (
            <button style={{ backgroundColor: value.primaryColor }}>
                Botão primário
            </button>
        )}
    </ThemeContext.Consumer>
);

export default Button;