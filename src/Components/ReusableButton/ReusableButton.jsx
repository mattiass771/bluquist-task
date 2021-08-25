import React, {useState} from 'react'
import buttons from '../../styles/buttons.module.css'

export const ReusableButton = ({
    text, 
    fill,
    color = 'green',
    size = 'medium',
    variant,
    toggled = false
}) => {
    const [isToggled, setIsToggled] = useState(toggled)
    const xAxis = {
        small: ["32", "10"],
        medium: ["60", "15"]
    }
    const yAxis = {
        small: "12",
        medium: "20"
    }
    const circleRadius = {
        small: "9",
        medium: "14"
    }
    if (variant === 'toggle') {
        return (
            <button 
                className={`
                    ${buttons.default} 
                    ${buttons[`toggle-${size}`]}
                    ${!isToggled && buttons[color ? `outline-${color}` : fill]}
                    ${color && buttons[color]}
                    ${size && buttons[size]}
                    ${buttons[isToggled ? `toggle-${color}` : `outline-toggle-${color}`]}
                `}
                onClick={() => setIsToggled(!isToggled)}
            >
                <svg className={buttons.circle}>
                    <circle 
                        cx={isToggled ? xAxis[size][0] : xAxis[size][1]}
                        cy={yAxis[size]}
                        r={circleRadius[size]}
                        className={buttons.toggler}
                    />
                </svg>
            </button>
        )
    }
    return (
        <button className={`
            ${buttons.default} 
            ${fill && buttons[color ? `${fill}-${color}` : fill]}
            ${color && buttons[color]}
            ${size && buttons[size]}
        `}>
            {text}
        </button>
    )
}