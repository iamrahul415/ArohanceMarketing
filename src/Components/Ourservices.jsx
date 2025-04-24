import React from 'react';

function Ourservices() {
    const contentArray = [
        {
            heading: "h1:Shoots",
            paragraph: "Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu..."
        },
        {
            heading: "h2:Designing",
            paragraph: "Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu..."
        },
        {
            heading: "h3:Marketing",
            paragraph: "Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu..."
        },
        {
            heading: "h4:Tech",
            paragraph: "Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu..."
        }
    ];

    return (
        <div className='w-full h-screen pt-1 flex justify-center items-center bg-zinc-950'>
            <div className='bg-[#6bc3a5aa] h-3/4 w-1/2 mt-40 p-8 flex flex-col'>
                <div className='text-4xl text-orange-400 text-center mb-8'>
                    <h1>Our Services</h1>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto perspective-1000'>
                    {contentArray.map((item, index) => {
                        const headingParts = item.heading.split(':');
                        const headingLevel = headingParts[0];
                        const headingText = headingParts[1];
                        
                        return (
                            <div 
                                key={index}
                                className='group relative h-64 transition-all duration-500 preserve-3d hover:rotate-x-0'
                                style={{ transform: 'rotateX(90deg)' }}
                            >
                                <div className='absolute w-full h-full bg-orange-400 p-6 rounded-lg shadow-lg backface-hidden'>
                                    {headingLevel === 'h1' && <h1 className='text-zinc-950 text-2xl font-bold mb-4'>{headingText}</h1>}
                                    {headingLevel === 'h2' && <h2 className='text-zinc-950 text-2xl font-bold mb-4'>{headingText}</h2>}
                                    {headingLevel === 'h3' && <h3 className='text-zinc-950 text-2xl font-bold mb-4'>{headingText}</h3>}
                                    {headingLevel === 'h4' && <h4 className='text-zinc-950 text-2xl font-bold mb-4'>{headingText}</h4>}
                                </div>
                                <div 
                                    className='absolute w-full h-full bg-orange-600 p-6 rounded-lg shadow-lg rotate-x-180 backface-hidden'
                                    style={{ transform: 'rotateX(180deg)' }}
                                >
                                    <p className='text-zinc-50 text-opacity-90'>
                                        {item.paragraph}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Ourservices;