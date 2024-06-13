import { events, TitleEvent } from "../constants";

const Event = () => {
    return (
        <div id="Event" className="h-auto lg:h-screen max-w-screen-2xl my-20 violet-gradient">
            <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-orange md:text-2xl lg:text-4xl py-12 text-center">{TitleEvent.title}</h2>
            <div className="mx-auto flex flex-col content-center justify-center lg:w-full lg:flex-row lg:justify-between">
                {events.map((event) => (
                    <a key={event.id} href={event.lien} className="w-max m-auto py-4 lg:pt-0">
                        <div className="max-w-sm bg-white border border-white rounded-lg shadow-2xl">
                            <img className="h-64 w-96 rounded-xl border-8 border-white" src={event.img} alt="" />
                            <div className="p-5">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-purple hover:text-primary">{event.title}</h5>
                                <p className="mb-3 font-normal text-dark-purple dark:text-gray-400">{event.des}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Event;