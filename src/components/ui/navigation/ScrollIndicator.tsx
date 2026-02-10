export default function ScrollIndicator() {
    return (
        <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-delayed"
            aria-hidden="true"
        >
            <div
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 animate-scroll-bounce"
            >
                <div
                    className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse"
                />
            </div>
        </div>
    );
}
