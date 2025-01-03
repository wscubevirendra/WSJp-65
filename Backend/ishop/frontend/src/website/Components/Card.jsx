import React from 'react';

const Card = ({ image, title }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-[50%]" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
        </div>
    );
};

const CardList = () => {
    const cards = [
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 1' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 2' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 3' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 4' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 5' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 6' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 7' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 8' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 9' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2m70XvXrD7ul53OLgkffMayDv4eGDdqi3RC9gBsCHpwBVFCkNHSPywNG_E8KdAZnIBLo&usqp=CAU', title: 'Product 10' },
    ];

    return (
        <div className="flex flex-wrap justify-center">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} title={card.title} />
            ))}
        </div>
    );
};

export default CardList;