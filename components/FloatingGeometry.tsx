const FloatingGeometry = ({ variant = "default" }: { variant?: string }) => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Primary left to right shapes - top section */}
            <div className="absolute top-8 left-0 w-3 h-3 bg-primary/15 rounded-full animate-float-left-to-right-1"></div>
            <div className="absolute top-16 left-0 w-2 h-2 bg-cyan-300/20 transform rotate-45 animate-float-left-to-right-2"></div>
            <div className="absolute top-24 left-0 w-4 h-4 bg-primary/10 rounded-full animate-float-left-to-right-3"></div>
            <div className="absolute top-32 left-0 w-3 h-3 bg-cyan-200/25 transform rotate-12 animate-float-left-to-right-1" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-40 left-0 w-2 h-2 bg-primary/20 rounded-full animate-float-left-to-right-2" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-48 left-0 w-5 h-5 bg-cyan-400/15 transform rotate-45 animate-float-left-to-right-3" style={{animationDelay: '6s'}}></div>
            <div className="absolute top-56 left-0 w-1 h-1 bg-primary/30 rounded-full animate-float-left-to-right-1" style={{animationDelay: '8s'}}></div>
            <div className="absolute top-64 left-0 w-3 h-3 bg-cyan-300/18 transform rotate-30 animate-float-left-to-right-2" style={{animationDelay: '10s'}}></div>

            {/* Middle section left to right */}
            <div className="absolute top-72 left-0 w-2 h-2 bg-primary/12 rounded-full animate-float-left-to-right-3" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-80 left-0 w-4 h-4 bg-cyan-200/22 transform rotate-45 animate-float-left-to-right-1" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-88 left-0 w-2 h-2 bg-primary/18 rounded-full animate-float-left-to-right-2" style={{animationDelay: '5s'}}></div>
            <div className="absolute top-96 left-0 w-3 h-3 bg-cyan-400/20 transform rotate-60 animate-float-left-to-right-3" style={{animationDelay: '7s'}}></div>

            {/* Bottom section left to right */}
            <div className="absolute bottom-32 left-0 w-2 h-2 bg-primary/20 rounded-full animate-float-left-to-right-1" style={{animationDelay: '9s'}}></div>
            <div className="absolute bottom-24 left-0 w-5 h-5 bg-cyan-300/15 transform rotate-45 animate-float-left-to-right-2" style={{animationDelay: '11s'}}></div>
            <div className="absolute bottom-16 left-0 w-1 h-1 bg-primary/25 rounded-full animate-float-left-to-right-3" style={{animationDelay: '13s'}}></div>
            <div className="absolute bottom-8 left-0 w-3 h-3 bg-cyan-200/20 transform rotate-30 animate-float-left-to-right-1" style={{animationDelay: '15s'}}></div>

            {/* Primary right to left shapes - top section */}
            <div className="absolute top-12 right-0 w-2 h-2 bg-cyan-400/20 transform rotate-45 animate-float-right-to-left-1"></div>
            <div className="absolute top-20 right-0 w-3 h-3 bg-primary/12 rounded-full animate-float-right-to-left-2"></div>
            <div className="absolute top-28 right-0 w-4 h-4 bg-cyan-300/18 transform rotate-12 animate-float-right-to-left-3"></div>
            <div className="absolute top-36 right-0 w-1 h-1 bg-primary/28 rounded-full animate-float-right-to-left-1" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-44 right-0 w-2 h-2 bg-cyan-200/22 transform rotate-60 animate-float-right-to-left-2" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-52 right-0 w-5 h-5 bg-primary/8 rounded-full animate-float-right-to-left-3" style={{animationDelay: '6s'}}></div>
            <div className="absolute top-60 right-0 w-3 h-3 bg-cyan-400/16 transform rotate-45 animate-float-right-to-left-1" style={{animationDelay: '8s'}}></div>
            <div className="absolute top-68 right-0 w-2 h-2 bg-primary/14 rounded-full animate-float-right-to-left-2" style={{animationDelay: '10s'}}></div>

            {/* Middle section right to left */}
            <div className="absolute top-76 right-0 w-4 h-4 bg-cyan-300/12 transform rotate-30 animate-float-right-to-left-3" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-84 right-0 w-1 h-1 bg-primary/24 rounded-full animate-float-right-to-left-1" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-92 right-0 w-3 h-3 bg-cyan-200/18 transform rotate-45 animate-float-right-to-left-2" style={{animationDelay: '5s'}}></div>

            {/* Bottom section right to left */}
            <div className="absolute bottom-48 right-0 w-4 h-4 bg-primary/8 rounded-full animate-float-right-to-left-1" style={{animationDelay: '7s'}}></div>
            <div className="absolute bottom-40 right-0 w-2 h-2 bg-cyan-400/20 transform rotate-45 animate-float-right-to-left-2" style={{animationDelay: '9s'}}></div>
            <div className="absolute bottom-32 right-0 w-5 h-5 bg-primary/10 rounded-full animate-float-right-to-left-3" style={{animationDelay: '11s'}}></div>
            <div className="absolute bottom-24 right-0 w-1 h-1 bg-cyan-300/25 transform rotate-60 animate-float-right-to-left-1" style={{animationDelay: '13s'}}></div>
            <div className="absolute bottom-16 right-0 w-3 h-3 bg-primary/16 rounded-full animate-float-right-to-left-2" style={{animationDelay: '15s'}}></div>
            <div className="absolute bottom-8 right-0 w-2 h-2 bg-cyan-200/22 transform rotate-45 animate-float-right-to-left-3" style={{animationDelay: '17s'}}></div>

            {/* Diagonal movement shapes */}
            <div className="absolute top-12 left-0 w-3 h-3 bg-primary/14 transform rotate-45 animate-float-diagonal-1"></div>
            <div className="absolute top-20 left-0 w-2 h-2 bg-cyan-300/16 rounded-full animate-float-diagonal-2" style={{animationDelay: '5s'}}></div>
            <div className="absolute bottom-12 right-0 w-2 h-2 bg-cyan-300/16 rounded-full animate-float-diagonal-2"></div>
            <div className="absolute bottom-20 right-0 w-4 h-4 bg-primary/12 transform rotate-30 animate-float-diagonal-1" style={{animationDelay: '3s'}}></div>

            {/* Additional micro shapes for texture */}
            <div className="absolute top-36 left-0 w-1 h-1 bg-primary/25 rounded-full animate-float-shapes-1" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-44 left-0 w-1 h-1 bg-cyan-400/30 transform rotate-45 animate-float-shapes-2" style={{animationDelay: '7s'}}></div>
            <div className="absolute top-52 left-0 w-1 h-1 bg-primary/20 rounded-full animate-float-shapes-3" style={{animationDelay: '11s'}}></div>
            <div className="absolute top-60 left-0 w-1 h-1 bg-cyan-300/28 transform rotate-30 animate-float-shapes-4" style={{animationDelay: '15s'}}></div>
            <div className="absolute bottom-36 left-0 w-1 h-1 bg-primary/22 rounded-full animate-float-shapes-5" style={{animationDelay: '19s'}}></div>
            <div className="absolute bottom-28 left-0 w-1 h-1 bg-cyan-400/26 transform rotate-60 animate-float-shapes-6" style={{animationDelay: '23s'}}></div>
            <div className="absolute bottom-20 left-0 w-1 h-1 bg-primary/18 rounded-full animate-float-shapes-7" style={{animationDelay: '27s'}}></div>

            {/* Right side micro shapes */}
            <div className="absolute top-38 right-0 w-1 h-1 bg-cyan-300/24 rounded-full animate-float-right-to-left-1" style={{animationDelay: '4s'}}></div>
            <div className="absolute top-46 right-0 w-1 h-1 bg-primary/26 transform rotate-45 animate-float-right-to-left-2" style={{animationDelay: '8s'}}></div>
            <div className="absolute top-54 right-0 w-1 h-1 bg-cyan-400/22 rounded-full animate-float-right-to-left-3" style={{animationDelay: '12s'}}></div>
            <div className="absolute top-62 right-0 w-1 h-1 bg-primary/20 transform rotate-30 animate-float-right-to-left-1" style={{animationDelay: '16s'}}></div>
            <div className="absolute bottom-38 right-0 w-1 h-1 bg-cyan-300/24 rounded-full animate-float-right-to-left-2" style={{animationDelay: '20s'}}></div>
            <div className="absolute bottom-30 right-0 w-1 h-1 bg-primary/22 transform rotate-60 animate-float-right-to-left-3" style={{animationDelay: '24s'}}></div>

            {variant === "dense" && (
                <>
                    {/* Extra dense shapes for specific sections */}
                    <div className="absolute top-14 left-0 w-2 h-2 bg-cyan-200/15 transform rotate-45 animate-float-left-to-right-3" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-22 left-0 w-1 h-1 bg-primary/28 rounded-full animate-float-left-to-right-1" style={{animationDelay: '3s'}}></div>
                    <div className="absolute top-30 left-0 w-3 h-3 bg-cyan-400/12 transform rotate-30 animate-float-left-to-right-2" style={{animationDelay: '5s'}}></div>
                    <div className="absolute top-38 left-0 w-2 h-2 bg-primary/16 rounded-full animate-float-left-to-right-3" style={{animationDelay: '7s'}}></div>
                    <div className="absolute top-46 left-0 w-4 h-4 bg-cyan-300/10 transform rotate-60 animate-float-left-to-right-1" style={{animationDelay: '9s'}}></div>

                    <div className="absolute top-18 right-0 w-2 h-2 bg-primary/12 rounded-full animate-float-right-to-left-3" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-26 right-0 w-3 h-3 bg-cyan-200/18 transform rotate-45 animate-float-right-to-left-1" style={{animationDelay: '4s'}}></div>
                    <div className="absolute top-34 right-0 w-1 h-1 bg-primary/24 rounded-full animate-float-right-to-left-2" style={{animationDelay: '6s'}}></div>
                    <div className="absolute top-42 right-0 w-4 h-4 bg-cyan-400/14 transform rotate-30 animate-float-right-to-left-3" style={{animationDelay: '8s'}}></div>
                    <div className="absolute top-50 right-0 w-2 h-2 bg-primary/18 rounded-full animate-float-right-to-left-1" style={{animationDelay: '10s'}}></div>

                    <div className="absolute bottom-44 left-0 w-3 h-3 bg-cyan-300/18 transform rotate-12 animate-float-left-to-right-2" style={{animationDelay: '12s'}}></div>
                    <div className="absolute bottom-36 left-0 w-1 h-1 bg-primary/26 rounded-full animate-float-left-to-right-3" style={{animationDelay: '14s'}}></div>
                    <div className="absolute bottom-28 left-0 w-2 h-2 bg-cyan-400/20 transform rotate-45 animate-float-left-to-right-1" style={{animationDelay: '16s'}}></div>

                    <div className="absolute bottom-52 right-0 w-2 h-2 bg-primary/15 rounded-full animate-float-right-to-left-1" style={{animationDelay: '18s'}}></div>
                    <div className="absolute bottom-44 right-0 w-5 h-5 bg-cyan-300/12 transform rotate-60 animate-float-right-to-left-2" style={{animationDelay: '20s'}}></div>
                    <div className="absolute bottom-36 right-0 w-1 h-1 bg-primary/22 rounded-full animate-float-right-to-left-3" style={{animationDelay: '22s'}}></div>
                </>
            )}
        </div>
    );
};

export default FloatingGeometry;