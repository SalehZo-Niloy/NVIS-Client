import { Avatar, Card } from 'flowbite-react';
import React from 'react';

const ReviewCards = ({ review }) => {
    const { userPhoto, userName, serviceTitle, userReview } = review;
    return (
        <Card className='bg-emerald-400 mb-4'>
            <div className='flex items-center'>
                <Avatar
                    img={userPhoto}
                    rounded={true}
                />
                <p className='ml-2 text-lg font-medium text-zinc-800'>{userName}</p>
            </div>
            <h5 className="text-lg font-semibold tracking-tight text-zinc-800">
                Reviewed about {serviceTitle}
            </h5>
            <p className="font-medium text-black">
                {userReview}
            </p>
        </Card>
    );
};

export default ReviewCards;