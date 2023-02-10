import { Logo } from "../components/Logo";

export function Subscribe() {
    return(
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="max-w-[110px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-width-[640px]">
                    <Logo />
                    <h1>
                        Study from wherever you are with the best teachers you can find!
                    </h1>
                    <p>
                        You can browse to find the best classes for you!
                    </p>
                </div>
                <div>

                </div>
            </div>
            <img src="/src/assets/play-mockup.png" className="mt-10" alt="play button" />

        </div>
    )
}