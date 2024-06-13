import { events } from "../constants";


const Event = () => {
    return (
        <div className="mx-auto w-full max-w-screen-2xl flex justify-center justify-between ">

    {/* Evenement */}
            
                    {events.map((event) => (
                        <a href={`${event.lien}`}>
                            <div className="max-w-sm bg-white border border-white rounded-3xl shadow-2xl">
                                <img className="h-64 w-96 rounded-3xl border-4  border-white" src={`${event.img}`} alt="" />
                                <div className="p-5 "> {/*   text-center   */}
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-dark-purple  hover:text-primary bg-">{event.title}</h5>
                                    <p className="mb-3 font-normal text-dark-purple dark:text-gray-400">{event.des}</p>
                                </div>
                            </div>
                        </a>
                        ))}
        </div>
    );
    
}

export default Event;