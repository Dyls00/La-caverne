import { missionData, TitleMissionsBDE } from '../constants';

const Missions = () => {
    return (
        <>
            <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
                {TitleMissionsBDE.map((TitleMissionBDE) => (
                    <>
                        <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-dark-purple md:text-2xl lg:text-4xl">{TitleMissionBDE.title}</h2>
                        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 ">{TitleMissionBDE.text}</p>
                    </>
                ))}
            </div>

            <div className="grid mb-8 border shadow-sm md:mb-12 md:grid-cols-2 bg-white lg:mx-auto mx-8 lg:w-11/12 max-w-screen-2xl">
                {missionData.map((mission, index) => (
                    <figure
                        key={index}
                        className='flex flex-col items-center justify-center p-8 bg-white text-center border-2'
                    >
                        <blockquote className="max-w-2xl mx-auto mb-4 text-dark-purple lg:mb-8">
                            <h3 className="text-lg font-bold text-primary">{mission.title}</h3>
                            <p className="my-4">{mission.text}</p>
                        </blockquote>
                    </figure>
                ))}
            </div>
        </>
    );
}

export default Missions;