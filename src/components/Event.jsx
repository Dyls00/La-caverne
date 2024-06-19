import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { events, TitleEvent } from "../constants";

const Event = () => {
    return (
        <section id="Event" className="h-auto lg:min-h-screen w-full py-16 violet-gradient">
            <div id="Missions" className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16">
                <h2 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-2xl lg:text-4xl"><span className='text-orange'>/ </span>{TitleEvent.title}</h2>
                <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-white">{TitleEvent.text}</p>
            </div>
            <div className="flex flex-col content-center justify-center lg:w-full lg:flex-row lg:justify-between">
                {events.map((event, index) => (
                    <a key={index} href={event.lien} className="w-max m-auto py-4 lg:pt-0">
                        <div className="max-w-sm bg-white border border-white rounded-lg shadow-2xl">
                            <LazyLoadImage className="h-64 w-96 rounded-xl border-8 border-white" src={event.img} alt="" effect="blur" />
                            <div className="p-5">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-dark-purple hover:text-primary">{event.title}</h3>
                                <p className="mb-3 font-normal text-dark-purple">{event.des}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Event;