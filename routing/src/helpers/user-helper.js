export const createUsers = () => {
    var users = localStorage.getItem("users") || [];
    if (users.length === 0) {
        users.push(
            {
                id: 1,
                firstName: "John",
                lastName: "Doe",
                salary: 25000
            },
            {
                id: 2,
                firstName: "Tony",
                lastName: "Stark",
                salary: 35000
            },
            {
                id: 3,
                firstName: "Bruce",
                lastName: "Banner",
                salary: 40000
            }
        );

        localStorage.setItem("users", JSON.stringify(users));
    }
}

export const getUsers = () => {
    return JSON.parse(localStorage.getItem("users") || []) ;
}

export const getUser = (id) => {
    var users = JSON.parse(localStorage.getItem("users") || []);

    return users.find(u => u.id == id);
}