import React from 'react'

function Thereismore() {
    const contentArray = [
        {
            heading: "Everit Quick edits",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero."
        },
        {
            heading: "Podcast Shoots",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero."
        },
        {
            heading: "Product Shoots",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero with professional corporate photography for headshots, team photos, and company events."
        },
        {
            heading: "Ad Shoots",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero."
        },
        {
            heading: "Product Shoots",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero with professional corporate photography for headshots, team photos, and company events."
        },
        {
            heading: "Ad Shoots",
            paragraph: "Curabitur ligula sapien, incidunt non, euismod vitae, posuere imperdiet, leo. Nulla facilisi. Mauris sollicitudin fermentum libero."
        }
    ];
  return (
    <div className='pt-1 w-full min-h-screen bg-amber-600'>
        <div className='text-8xl text-black mt-8 ml-8'>Wait...</div>
        <div className='text-8xl text-black mt-4 ml-8 mb-12'>There's More!</div>

        <div className='grid grid-cols-2 gap-6 px-32'>
            {contentArray.map((item, index) => (
                <div key={index} className='bg-zinc-900 rounded-lg shadow-lg p-6 w-[60vh] mb-4   text-white'>
                    <h3 className='text-xl font-bold mb-2'>{item.heading}</h3>
                    <p className='text-base'>{item.paragraph}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Thereismore