let locations = [
    {
        id: 1,
        type: "MySeat",
        src: "Gate 4",
        des: "Section 108",
        steps: ["Enter at gate 4", "Continue past sections 110 - 111", "Turn left into sections 108 - 109", "Turn right into section 108"],
        map: "./map1"
    },
    {
        id: 2,
        type: "MySeat",
        src: "Gate 8",
        des: "Section 223",
        steps: ["Enter at gate 8", "Continue through section 222", "Exit section 222", "Turn left", "Continue past section 222", "Turn left into sections 222 - 223", "Turn right into section 223"],
        map: "./map2"
    },
    {
        id: 3,
        type: "OtherSeat",
        src: "Section 109",
        des: "Section 102",
        steps: ["Exit section 109 (head away from the field and toward the back of the stadium)", "Turn left", "Continue past sections 106 - 107", "Continue past sections 104 - 105", "Turn left into sections 102 - 103", "Turn right into section 102"],
        map: "./map3"
    },
    {
        id: 4,
        type: "OtherSeat",
        src: "Section 217",
        des: "Section 210",
        steps: ["While facing the field, turn right", "Continue through section 217", "Continue past section 216", "Continue past sections 214 - 215", "Continue past sections 212 - 213", "Continue past section 211", "Continue into section 210"],
        map: "./map4"
    },
    {
        id: 5,
        type: "Location",
        src: "Section 217",
        des: "Chick-fil-A",
        steps: ["Exist section 217 (head toward the field)", "Turn right", "Continue past sectino 216", "Continue past section 215", "Chick fil A is on the left hand side"],
        map: "./map5"
    },
    {
        id: 6,
        type: "Location",
        src: "Section 109",
        des: "Twisted Taco",
        steps: ["Exit section 109 (head away from the field and toward the back of the stadium)", "Turn left", "Turn left into sections 106 - 107", "Twisted Taco is on the left hand side"]
    }
] // TODO: pins to drop for food -> need more information on how to map to pixel
