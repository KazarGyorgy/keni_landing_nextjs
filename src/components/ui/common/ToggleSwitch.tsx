interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
    ariaLabelledBy: string;
}

export default function ToggleSwitch({ checked, onChange, ariaLabelledBy }: ToggleSwitchProps) {
    return (
        <button
            onClick={onChange}
            className={`relative w-12 h-6 rounded-full transition-colors ${checked ? "bg-accent-500" : "bg-white/20"
                }`}
            role="switch"
            aria-checked={checked}
            aria-labelledby={ariaLabelledBy}
        >
            <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${checked ? "left-7" : "left-1"
                    }`}
            />
        </button>
    );
}
