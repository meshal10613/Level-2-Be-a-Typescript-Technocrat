interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        model: string;
        brand: string;
        releasedYear: string;
    };
    smartWatch?: T;
	bike? : X;
}

interface NoBrandWatch {
    heartRate: string;
    stopWatch: boolean;
}

interface BrandWatch {
    heartRate: string;
    stopWatch: boolean;
    callSupport: boolean;
    aiFeature: boolean;
}

const poorDev: Developer<NoBrandWatch, {
	brand: "Yamaha", 
	engineCapacity: "200cc"
}> = {
    name: "Meshal",
    salary: 20000,
    device: {
        model: "Note 9S",
        brand: "Xiaomi",
        releasedYear: "2020",
    },
    smartWatch: {
        heartRate: "150",
        stopWatch: false,
    },
};

const richDev: Developer<BrandWatch> = {
    name: "Rahim",
    salary: 80000,
    device: {
        model: "Macbook 5 pro",
        brand: "Apple",
        releasedYear: "2020",
    },
    smartWatch: {
        heartRate: "150",
        stopWatch: true,
        callSupport: true,
        aiFeature: true,
    },
};
