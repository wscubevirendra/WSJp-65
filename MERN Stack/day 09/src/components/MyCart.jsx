import React from 'react'

export default function MyCart() {
    const cardsData = [
        { id: 1, image: 'https://via.placeholder.com/150', title: 'Card 1' },
        { id: 2, image: 'https://via.placeholder.com/150', title: 'Card 2' },
        { id: 3, image: 'https://via.placeholder.com/150', title: 'Card 3' },
        { id: 4, image: 'https://via.placeholder.com/150', title: 'Card 4' },
    ];

    return (
        <div className="container my-5">
            <h1 className='text-center my-2'>Home Page</h1>
            <div className="row">
                {cardsData.map((card) => (
                    <div key={card.id} className="col-md-3 col-sm-6 mb-4">
                        <div className="card h-100">
                            <img
                                src={card.image}
                                className="card-img-top"
                                alt={card.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title text-center">{card.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
