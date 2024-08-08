const restaurant = require('../models/Restaurant');

module.exports = {
    addRestaurant: async (req, res) => {
        const { title, time, imageUrl, pickup, delivery, isAvailable, owner, code, logoUrl, coords } = req.body;

        if (!title || !time || !imageUrl || !owner || !code || !logoUrl || !coords || !coords.latitude || !coords.longitude || !coords.address || !coords.title) {
            return res.status(400).json({ status: false, message: "All fields are required" });

        }
        try {

        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    },

    getRestaurantById: async (req, res) => {
        const id = req.params.id;
        try {
            const restaurant = await restaurant.findById(id);

            res.status(200).json({ restaurant });
        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    },

    getAllNearByRestaurant: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }

    },

    getRandomRestaurants: async (req, res) => {
        try {

        } catch (error) {
            res.status(500).json({ status: false, message: error.message });
        }
    }

}