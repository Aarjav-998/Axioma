interface AnimatedShapesProps {
    variant?: 'default' | 'hero';
}

const AnimatedShapes = ({ variant = 'default' }: AnimatedShapesProps) => {
    const isHero = variant === 'hero';

    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Left side 3D shapes */}
            <div className={`absolute left-0 top-0 h-full ${isHero ? 'w-48' : 'w-24'}`}>
                {/* 3D Cube */}
                <div className={`absolute top-16 -left-6 ${isHero ? 'w-28 h-28' : 'w-12 h-12'} shape-3d animate-rotate-3d`}>
                    <div className="relative w-full h-full transform-gpu">
                        <div className={`absolute inset-0 bg-gradient-to-br from-primary/${isHero ? '35' : '25'} to-primary/${isHero ? '12' : '8'} shadow-lg rounded-lg transform rotate-x-12 rotate-y-12`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-tl from-orange-400/${isHero ? '20' : '15'} to-orange-600/${isHero ? '8' : '5'} shadow-md rounded-lg transform translate-x-1 translate-y-1 rotate-x-6 rotate-y-6`}></div>
                    </div>
                </div>

                {/* 3D Sphere */}
                <div className={`absolute top-1/2 -left-8 ${isHero ? 'w-32 h-32' : 'w-16 h-16'} shape-3d animate-wobble-3d`}>
                    <div className="relative w-full h-full">
                        <div className={`absolute inset-0 bg-gradient-radial from-cyan-300/${isHero ? '40' : '30'} via-cyan-400/${isHero ? '20' : '15'} to-cyan-600/${isHero ? '8' : '5'} rounded-full shadow-lg`}></div>
                        <div className={`absolute top-1 left-1 ${isHero ? 'w-4 h-4' : 'w-3 h-3'} bg-white/20 rounded-full blur-sm`}></div>
                    </div>
                </div>

                {/* 3D Triangle */}
                <div className={`absolute bottom-24 left-2 ${isHero ? 'w-18 h-18' : 'w-14 h-14'} shape-3d animate-float-3d`}>
                    <div className="relative w-full h-full">
                        <div className={`absolute top-0 left-1/2 w-0 h-0 ${isHero ? 'border-l-[18px] border-r-[18px] border-b-[25px]' : 'border-l-[14px] border-r-[14px] border-b-[20px]'} border-l-transparent border-r-transparent border-b-primary/${isHero ? '25' : '20'} transform -translate-x-1/2 shadow-lg`}></div>
                    </div>
                </div>

                {/* Additional Hero Shape - 3D Prism */}
                {isHero && (
                    <div className="absolute top-1/4 -left-12 w-24 h-32 shape-3d animate-float-3d" style={{animationDelay: '2s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/40 to-cyan-600/20 transform skew-x-12 shadow-2xl"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-orange-300/15 transform skew-x-12 translate-x-3 shadow-xl"></div>
                        </div>
                    </div>
                )}

                {/* Additional Hero Shape - 3D Dodecahedron */}
                {isHero && (
                    <div className="absolute top-3/4 -left-4 w-28 h-28 shape-3d animate-rotate-3d" style={{animationDuration: '25s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/45 to-orange-600/20 transform rotate-45 shadow-2xl" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
                            <div className="absolute inset-1 bg-gradient-to-tl from-orange-400/30 to-orange-200/15 transform rotate-45 translate-x-2 translate-y-2" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'}}></div>
                        </div>
                    </div>
                )}

                {/* Extra Hero Shapes for more prominence */}
                {isHero && (
                    <div className="absolute top-10 -left-16 w-16 h-16 shape-3d animate-float-3d" style={{animationDelay: '5s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-primary/20 rounded-full shadow-2xl"></div>
                            <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full blur-sm"></div>
                        </div>
                    </div>
                )}

                {isHero && (
                    <div className="absolute bottom-10 -left-10 w-20 h-12 shape-3d animate-wobble-3d" style={{animationDelay: '3s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-orange-600/25 transform skew-y-12 shadow-2xl"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Right side 3D shapes */}
            <div className={`absolute right-0 top-0 h-full ${isHero ? 'w-48' : 'w-24'}`}>
                {/* 3D Octahedron */}
                <div className={`absolute top-20 -right-6 ${isHero ? 'w-24 h-24' : 'w-14 h-14'} shape-3d animate-rotate-3d`} style={{animationDuration: '18s', animationDirection: 'reverse'}}>
                    <div className="relative w-full h-full transform-gpu">
                        <div className={`absolute top-0 left-1/2 w-0 h-0 ${isHero ? 'border-l-[18px] border-r-[18px] border-b-[18px]' : 'border-l-[14px] border-r-[14px] border-b-[14px]'} border-l-transparent border-r-transparent border-b-cyan-400/${isHero ? '30' : '25'} transform -translate-x-1/2 shadow-lg`}></div>
                        <div className={`absolute bottom-0 left-1/2 w-0 h-0 ${isHero ? 'border-l-[18px] border-r-[18px] border-t-[18px]' : 'border-l-[14px] border-r-[14px] border-t-[14px]'} border-l-transparent border-r-transparent border-t-primary/${isHero ? '30' : '25'} transform -translate-x-1/2 shadow-lg`}></div>
                    </div>
                </div>

                {/* 3D Hexagon */}
                <div className={`absolute top-1/2 -right-8 ${isHero ? 'w-28 h-28' : 'w-16 h-16'} shape-3d animate-float-3d`} style={{animationDelay: '2s'}}>
                    <div className="relative w-full h-full transform-gpu">
                        <div className={`absolute inset-0 bg-gradient-to-br from-cyan-300/${isHero ? '30' : '25'} to-cyan-500/${isHero ? '15' : '10'} shadow-lg transform rotate-45`} style={{clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'}}></div>
                    </div>
                </div>

                {/* 3D Diamond */}
                <div className={`absolute bottom-20 right-2 ${isHero ? 'w-16 h-16' : 'w-12 h-12'} shape-3d animate-wobble-3d`} style={{animationDelay: '1s'}}>
                    <div className="relative w-full h-full transform-gpu">
                        <div className={`absolute inset-0 bg-gradient-to-br from-primary/${isHero ? '35' : '30'} to-orange-600/${isHero ? '18' : '15'} shadow-lg transform rotate-45`}></div>
                    </div>
                </div>

                {/* Additional Hero Shape - 3D Crystal */}
                {isHero && (
                    <div className="absolute top-1/4 -right-8 w-16 h-20 shape-3d animate-rotate-3d" style={{animationDuration: '22s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 via-primary/25 to-orange-600/15 shadow-2xl transform rotate-12" style={{clipPath: 'polygon(50% 0%, 80% 10%, 100% 35%, 85% 90%, 50% 100%, 15% 90%, 0% 35%, 20% 10%)'}}></div>
                            <div className="absolute top-2 left-2 w-2 h-4 bg-white/40 blur-sm"></div>
                        </div>
                    </div>
                )}

                {/* Additional Hero Shape - 3D Icosahedron */}
                {isHero && (
                    <div className="absolute bottom-32 -right-8 w-18 h-18 shape-3d animate-wobble-3d" style={{animationDelay: '4s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-orange-600/20 shadow-xl transform rotate-45" style={{clipPath: 'polygon(50% 0%, 90% 25%, 80% 75%, 50% 100%, 20% 75%, 10% 25%)'}}></div>
                            <div className="absolute inset-1 bg-gradient-to-tl from-cyan-400/25 to-cyan-200/10 transform rotate-45 translate-x-1 translate-y-1" style={{clipPath: 'polygon(50% 0%, 90% 25%, 80% 75%, 50% 100%, 20% 75%, 10% 25%)'}}></div>
                        </div>
                    </div>
                )}

                {/* Additional Hero Shape - Floating particles */}
                {isHero && (
                    <div className="absolute top-2/3 -right-6 w-32 h-32">
                        <div className="absolute top-0 left-0 w-10 h-10 bg-gradient-to-br from-primary/60 to-orange-600/30 rounded-full shadow-xl animate-float" style={{animationDelay: '0.5s'}}></div>
                        <div className="absolute top-12 right-2 w-8 h-8 bg-gradient-to-br from-cyan-400/55 to-cyan-600/25 rounded-full shadow-lg animate-float-reverse" style={{animationDelay: '1.5s'}}></div>
                        <div className="absolute bottom-4 left-8 w-12 h-12 bg-gradient-to-br from-orange-400/50 to-primary/20 transform rotate-45 shadow-xl animate-pulse-scale" style={{animationDelay: '2.5s'}}></div>
                    </div>
                )}

                {/* More prominent right side shapes for hero */}
                {isHero && (
                    <div className="absolute top-8 -right-12 w-18 h-18 shape-3d animate-rotate-3d" style={{animationDelay: '4s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/50 to-primary/25 transform rotate-12 shadow-2xl" style={{clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'}}></div>
                        </div>
                    </div>
                )}

                {isHero && (
                    <div className="absolute bottom-16 -right-14 w-22 h-16 shape-3d animate-float-3d" style={{animationDelay: '6s'}}>
                        <div className="relative w-full h-full transform-gpu">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/55 to-orange-600/30 transform skew-x-[-12deg] shadow-2xl"></div>
                        </div>
                    </div>
                )}
            </div>

            {/* Center background elements */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`${isHero ? 'w-[32rem] h-[32rem]' : 'w-64 h-64'} bg-gradient-radial from-cyan-200/${isHero ? '8' : '3'} via-primary/${isHero ? '5' : '2'} to-transparent rounded-full animate-pulse-scale`} style={{animationDuration: '15s'}}></div>
                {isHero && (
                    <>
                        <div className="absolute w-96 h-96 bg-gradient-radial from-primary/6 via-orange-300/3 to-transparent rounded-full animate-pulse-scale" style={{animationDuration: '18s', animationDelay: '3s'}}></div>
                        <div className="absolute w-[28rem] h-[28rem] bg-gradient-radial from-cyan-300/6 via-cyan-400/3 to-transparent rounded-full animate-pulse-scale" style={{animationDuration: '22s', animationDelay: '6s'}}></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default AnimatedShapes;