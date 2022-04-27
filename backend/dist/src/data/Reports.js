"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let reports = [
    {
        name: "Marketing Denmark",
        tags: ["dk", "denmark", "marketing", "national", "demographic"],
        url: "",
        id: 1,
        superUser: [],
        img: ""
    },
    {
        name: "Sales Target Group",
        tags: ["age group", "sales", "demographic", "target"],
        url: "",
        id: 2,
        superUser: [],
        img: ""
    },
    {
        name: "Global Engagement",
        tags: ["global", "international", "engagement", "activity", "usage"],
        url: "",
        id: 3,
        superUser: [],
        img: ""
    },
    {
        name: "GTFO sales",
        tags: ["sales", "gtfo", "transactions", "sold", "operations"],
        url: "",
        id: 4,
        superUser: [],
        img: ""
    },
    {
        name: "Competition estimated sales",
        tags: ["sales", "competition", "estimated", "market", "comparing"],
        url: "",
        id: 5,
        superUser: [],
        img: ""
    },
    {
        name: "Product A Rating",
        tags: ["product", "rating", "reputation", "data", "collected"],
        url: "",
        id: 6,
        superUser: [],
        img: ""
    },
    {
        name: "Product B Rating",
        tags: ["product", "rating", "reputation", "data", "collected"],
        url: "",
        id: 7,
        superUser: [],
        img: ""
    },
    {
        name: "In house usage stats",
        tags: ["in house", "stats", "statistics", "advantages", "spying"],
        url: "",
        id: 8,
        superUser: [],
        img: ""
    },
    {
        name: "Wilhelm scream usage by genres",
        tags: ["movie", "scream", "genres", "sorted", "usage"],
        url: "",
        id: 9,
        superUser: [],
        img: ""
    },
    {
        name: "First-mover Advantages",
        tags: ["mover", "first", "advantages", "market", "early"],
        url: "",
        id: 10,
        superUser: [],
        img: ""
    }
];
exports.default = reports;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwb3J0cy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9kYXRhL1JlcG9ydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFJLE9BQU8sR0FBYztJQUN2QjtRQUNFLElBQUksRUFBRSxtQkFBbUI7UUFDekIsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLGFBQWEsQ0FBQztRQUMvRCxHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsQ0FBQztRQUNyRCxHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUM7UUFDcEUsR0FBRyxFQUFFLEVBQUU7UUFDUCxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQztRQUM3RCxHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsNkJBQTZCO1FBQ25DLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUM7UUFDbEUsR0FBRyxFQUFFLEVBQUU7UUFDUCxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsV0FBVyxDQUFDO1FBQzlELEdBQUcsRUFBRSxFQUFFO1FBQ1AsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsRUFBRTtRQUNiLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsSUFBSSxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQztRQUM5RCxHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxDQUFDO1FBQ0wsU0FBUyxFQUFFLEVBQUU7UUFDYixHQUFHLEVBQUUsRUFBRTtLQUNSO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsc0JBQXNCO1FBQzVCLElBQUksRUFBRSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQUM7UUFDakUsR0FBRyxFQUFFLEVBQUU7UUFDUCxFQUFFLEVBQUUsQ0FBQztRQUNMLFNBQVMsRUFBRSxFQUFFO1FBQ2IsR0FBRyxFQUFFLEVBQUU7S0FDUjtJQUNEO1FBQ0UsSUFBSSxFQUFFLGdDQUFnQztRQUN0QyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO1FBQ3RELEdBQUcsRUFBRSxFQUFFO1FBQ1AsRUFBRSxFQUFFLENBQUM7UUFDTCxTQUFTLEVBQUUsRUFBRTtRQUNiLEdBQUcsRUFBRSxFQUFFO0tBQ1I7SUFDRDtRQUNFLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztRQUN6RCxHQUFHLEVBQUUsRUFBRTtRQUNQLEVBQUUsRUFBRSxFQUFFO1FBQ04sU0FBUyxFQUFFLEVBQUU7UUFDYixHQUFHLEVBQUUsRUFBRTtLQUNSO0NBQ0YsQ0FBQztBQUNGLGtCQUFlLE9BQU8sQ0FBQyJ9