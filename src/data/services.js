export const servicesData = [
    {
        id: 'event-og-arrangement',
        title: 'Innhold til event og arrangement',
        description: 'Når arrangementet trenger det ekstra kruttet, eller du bare ønsker en fet aftermovie.',
    image: 'images/B-1020-re-scaled.jpg',
        link: '/film-og-video/event-og-arrangement/'
    },
    {
        id: 'reklamer',
        title: 'Reklame',
        description: 'Skap interesse, vekk oppmerksomhet og påvirk holdninger eller handlinger.',
    image: 'images/Trygg-Trafikk-Juleselskap-46s-v5-Copy-010-scaled.png',
        link: '/film-og-video/reklamer/'
    },
    {
        id: 'tv-serier-og-dokumentarer',
        title: 'TV- og dokumentarserier',
        description: 'Vi i playgarden har bakrunn fra TV-bransjen, og vi brenner for å lage de gode historiene.',
    image: 'images/DSC08419-scaled.jpg',
        link: '/film-og-video/tv-serier-og-dokumentarer/'
    },
    {
        id: 'informasjonsfilmer',
        title: 'Informasjonsfilmer',
        description: 'Gjør komplekse temaer lette å formidle.',
    image: 'images/20240411-Skjermbilde-2024-04-11-kl.-10.49.05.webp',
        link: '/film-og-video/informasjonsfilmer/'
    },
    {
        id: 'fotografering',
        title: 'Fotografering',
        description: 'Et pent smil er smittsomt.',
    image: 'images/om-oss-playgarden-1.webp',
        link: '/film-og-video/fotografering/'
    },
    {
        id: 'drone',
        title: 'Drone',
        description: 'Fra et helt annet perspektiv.',
    image: 'images/Technopolis-UTOT.jpg',
        link: '/film-og-video/drone/'
    },
    {
        id: 'grafikk-og-animasjoner',
        title: 'Grafikk og animasjon',
        description: 'Skap liv og effekter i statiske bilder.',
    image: 'images/Asset-26-svg.png',
        link: '/film-og-video/grafikk-og-animasjoner/'
    },
    {
        id: 'medietrening',
        title: 'Medietrening',
        description: 'Bygg tillit, omdømme og kommuniser effektivt i media.',
        image: 'images/20230928-DSC04817.webp',
        link: '/om-oss/' // Note: This links to Om Oss in original, might want to keep or change.
    }
];

export const reklamerContent = {
    title: "Reklame og sosiale medier",
    heading: "Vekk følelser og skap tillit på en av de mest effektive måtene som finnes.",
    introText: [
        "Husker du den filmen som var så morsom at du måtte gjenfortelle den på fest?",
        "Eller den som traff hjertet og fikk deg til å felle en tåre?",
        "Eller reklamen med låten som fortsatt sitter på hjernen, mange år senere.",
        "Når reklamefilm treffer, blir den en opplevelse, og som fungerer like godt på storskjerm som i sosiale flater.",
        "God historiefortelling skaper gjenkjennelse, engasjement og tillit hos det viktigste publikummet av alle: kundene dine."
    ],
    mainVideo: "https://player.vimeo.com/video/770001841?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1",
    videos: [
        {
            title: "Grand Hotell",
            src: "https://player.vimeo.com/video/935348052?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1&h=84bad62fb5",
            link: "/produksjoner/grand-hotel/"
        },
        {
            title: "Idiotene på Jobben",
            src: "https://player.vimeo.com/video/1079293998?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1&h=5efe534f39",
            link: "/produksjoner/idiotene-pa-jobben/"
        },
        {
            title: "Idiotene på jobb (SoMe)",
            src: "https://player.vimeo.com/video/1079318708?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1&h=fe07f489ee",
            link: "/produksjoner/idiotene-pa-jobben/"
        },
        {
            title: "Trygg Trafikk",
            src: "https://player.vimeo.com/video/1020980332?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1&h=d094352cb4",
            link: "/produksjoner/trygg-trafikk/"
        },
        {
            title: "Trygg Trafikk",
            src: "https://player.vimeo.com/video/533987341?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1",
            link: "/produksjoner/trygg-trafikk/"
        },
        {
            title: "Tannbuen",
            src: "https://player.vimeo.com/video/658636802?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1",
            link: "/produksjoner/tannbuen/"
        },
        {
            title: "Cinderella (SoMe)",
            src: "https://player.vimeo.com/video/1113481704?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1&h=89762699c9",
            link: null
        },
        {
            title: "Trygg Trafikk",
            src: "https://player.vimeo.com/video/1034181979?color&autopause=0&loop=0&muted=0&title=0&portrait=1&byline=1",
            link: "/produksjoner/trygg-trafikk/"
        }
    ]
};

export const droneContent = {
    title: "Drone",
    heading: "Fra luften ser verden helt annerledes ut.",
    introText: [
        "Dronebilder gir unike fugleperspektiv som avslører nye mønstre, teksturer og grafiske linjer i landskapet.",
        "De gir et helt nytt visuelt uttrykk som får vanlige motiver til å se spektakulære ut.",
        "Vi har drone-sertifikat fra Luftfartstilsynet og god erfaring med reglene som gjelder for droneflyging."
    ],
    // No main video for Drone, but maybe we can use an image as 'mainVideo' placeholder or update component to handle Image.
    // For now leaving videos empty or could add if we find any.
    videos: []
};

