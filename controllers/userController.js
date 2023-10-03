const Person = require("../Models/personSchema")

const userController = {
    getUsers: async (req, res) => {
        const users = await Person.find()
        if (users)
            res.status(201).json({ message: "success users found", persons: users })
    },
    //get persons by name
    getbyName: async (req, res) => {
        const users = await Person.find({ name: req.body.name })
        if (users)
            res.status(201).json({ message: "success person found", persons: users })
    },

    //get persons by Id
    getById: async (req, res) => {
        const userId = req.body.id;
        const user = await Person.findById(userId);
        if (user)
            res.status(201).json({ message: "success person found", user: user })
    },
    //get persons by food
    getOne: async (req, res) => {
        const food = req.body.food;
        const person = await Person.findOne({ favoriteFoods: [food] });
        if (person)
            res.status(201).json({ message: "success person found", person: person })
    },
    addUser: async (req, res) => {
        const { name, age } = req.body

        if (!name || !age)
            res.status(400).json({ message: "missing fields" })

        const person = await Person.create({ name: name, age: age })
        if (person)
            res.status(201).json({ message: "success user create", person: person })
    },

    addUsers: async (req, res) => {
        const users = req.body.users

        if (!users)
            res.status(400).json({ message: "missing fields" })

        const persons = await Person.create(users)
        if (persons)
            res.status(201).json({ message: "success user create", persons: persons })
    },

    updateUser: async (req, res) => {
        const userId = req.body.id;
        const name = req.body.name;

        if (!userId || (!name)) {
            res.status(400).json({ message: 'missing id or fields' });
        }
        const updateData = {};
        if (name) updateData.name = name;

        const updatedUser = await Person.findByIdAndUpdate(userId, { $set: updateData });

        if (!updatedUser) {
            res.status(404).json({ message: 'user not found !' });
        }
        res.status(200).json({ message: 'User updated successfully', person: updatedUser });

    },

    deleteUser: async (req, res) => {
        const userId = req.body.id;

        if (!userId) {
            res.status(400).json({ message: 'missing id' });
        }

        const deletedUser = await Person.findByIdAndDelete(userId);

        if (!deletedUser) {
            res.status(404).json({ message: 'user not found !' });
        }

        res.status(200).json({ message: 'User deleted successfully', deletedUser: deletedUser });
    },

    deleteMany: async (req, res) => {

        const deletedUsers = await Person.deleteMany({ name: "x" });

        if (!deletedUsers) {
            res.status(404).json({ message: 'user not found !' });
        }

        res.status(200).json({ message: 'Users deleted successfully', deletedUsers: deletedUsers });
    },

    getPosts: async (req, res) => {

        const persons = Person.find({ favoriteFoods: ["borritos"] })
            .sort({ name: 1 })
            .limit(2)
            .select(-age)
            .exec()

        res.status(200).json({ message: 'success', persons: persons });
    },


}
module.exports = userController