import React, { useState } from 'react';
import { bdeMembers } from '../constants';

const Presentation = () => {
    const [errorImages, setErrorImages] = useState({});
    const [selectedMember, setSelectedMember] = useState(bdeMembers[0]);

    const handleError = (member) => {
        setErrorImages(prevState => ({ ...prevState, [`${member.firstname}-${member.name}`]: true }));
    };

    const avatarImage = (member) => {
        return (
            !errorImages[`${member.firstname}-${member.name}`] ? (
                <img
                    className="w-32 h-32 p-1 rounded-full m-auto"
                    src={member.avatar}
                    alt={`Avatar ${member.firstname} ${member.name}`}
                    onError={() => handleError(member)}
                />
            ) : (
                <img
                    className="w-32 h-32 p-1 rounded-full m-auto"
                    src="/images/members/avatar.svg"
                    alt="Avatar par défaut"
                />
            )
        )
    }

    const handleMember = (member) => {
        setSelectedMember(member)
    }

    return (
        <div id="Presentation" className="container lg:grid grid-cols-2 mx-auto w-full max-w-screen-2xl bg-white py-8 lg:divide-x-2 divide-dark-purple">
            <div className="p-8 rounded-xl violet-gradient m-auto w-4/5 md:w-3/4 divide-y-2 divide-orange border-2 border-dark-purple shadow-2xl">
                <h2 className="font-bold text-dark-purple text-center pb-4">{selectedMember.firstname} {selectedMember.name}</h2>
                <div className="flex py-4">
                    <div className="basis-1/3">
                        {avatarImage(selectedMember)}
                    </div>
                    <div className="basis-2/3 text-center flex flex-col mt-8 text-white">
                        <p>{selectedMember.role}</p>
                        <p>{selectedMember.class}</p>
                        <a className='mx-auto pt-2' href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a>
                    </div>
                </div>
                <div className="block py-4">
                    <p className='italic text-center'>"{selectedMember.message}"</p>
                </div>
            </div>
            <div className="grid grid-cols-3 pt-8 md:p-0">
                {bdeMembers.map((member) => (
                    <a
                        className='flex justify-start p-4 flex-col m-auto mb-4 cursor-pointer text-primary border-2 rounded-xl border-white hover:border-orange'
                        key={`${member.firstname}-${member.name}`}
                        onClick={() => handleMember(member)}
                    >
                        {avatarImage(member)}
                        <p className='m-auto font-bold'>{member.firstname}</p>
                        <p className='m-auto font-bold'>{member.name}</p>
                        <p className='m-auto'>{member.role}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Presentation;
