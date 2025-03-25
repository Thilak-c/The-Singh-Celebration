// app/head.js
// import { Metadata } from 'next';

export const metadata = {
    title: 'The Singh Celebration Guest House | Best Wedding & Event Venue',
    description:
        'The Singh Celebration Guest House offers the perfect setting for weddings, receptions, and grand celebrations. Enjoy exceptional hospitality and unforgettable experiences at our premier event venue.',
    openGraph: {
        title: 'The Singh Celebration Guest House | Best Wedding & Event Venue',
        description:
            'Experience unforgettable weddings and events at The Singh Celebration Guest House, renowned for its exceptional hospitality and beautiful venue.',
        images: [
            {
                url: ' https://thesinghcelebration.in/favicon.ico',
                width: 800,
                height: 600,
                alt: 'The Singh Celebration Guest House',
            },
        ],
        url: 'https://thesinghcelebration.in',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Singh Celebration Guest House | Best Wedding & Event Venue',
        description:
            'Book your dream wedding at The Singh Celebration Guest House. Offering exceptional hospitality and an unforgettable venue.',
        image: 'https://thesinghcelebration.in/favicon.ico',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function Head() {
    return (
        <>
            <meta name="robots" content="index, follow" />
        </>
    );
}
