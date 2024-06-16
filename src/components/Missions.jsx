import { missionData, TitleMissionsBDE } from '../constants';

const Missions = () => {
    return (
        <section id="Missions" className="pt-16 h-auto lg:h-screen">
            <div className="px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
                <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-primary md:text-2xl lg:text-4xl"><span className='text-orange'>/ </span>{TitleMissionsBDE.title}</h2>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-dark-purple">{TitleMissionsBDE.text}</p>
            </div>

            <div className="grid mb-8 gap-2 shadow-sm md:mb-12 md:grid-cols-2 bg-white lg:mx-auto mx-8 lg:w-11/12 max-w-screen-2xl">
                {missionData.map((mission, index) => (
                    <figure
                        key={index}
                        className='flex flex-col items-center justify-center p-8 bg-white text-center border-2 rounded-lg transition hover:border-orange'
                    >
                        <blockquote className="max-w-2xl mx-auto mb-4 text-dark-purple lg:mb-8">
                            <h3 className="text-lg font-bold text-fark-purple">{mission.title}</h3>
                            <p className="my-4">{mission.text}</p>
                        </blockquote>
                    </figure>
                ))}
            </div>
        </section>
    );
}

export default Missions;