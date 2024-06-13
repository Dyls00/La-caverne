import { events } from "../constants";

const Event = () => {
    return (
        <div id="Event" className="mx-auto max-w-screen-2xl my-20 flex flex-col justify-center lg:w-full lg:flex-row lg:justify-between">
            {events.map((event) => (
                <a key={event.id} href={event.lien} className="w-max mx-auto mt-4 lg:mt-0">
                    <div className="max-w-sm bg-white border border-white rounded-3xl shadow-2xl">
                        <img className="h-64 w-96 rounded-3xl border-4 border-white" src={event.img} alt="" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-purple hover:text-primary">{event.title}</h5>
                            <p className="mb-3 font-normal text-dark-purple dark:text-gray-400">{event.des}</p>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}

export default Event;