const mongoose = require("mongoose");
const Trip = mongoose.model("trips");

const fetchTrips = async (req, res) => {
  const { tripCode } = req.params;

  try {
    if (tripCode) {
      const trip = await Trip.findOne({ code: tripCode });
      if (!trip) {
        return res.status(404).json({ message: `No trip found for code: ${tripCode}` });
      }
      return res.status(200).json(trip);
    }

    const allTrips = await Trip.find({});
    return res.status(200).json(allTrips);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch trips.", error });
  }
};

// New trip
const addTrip = async (req, res) => {
  const tripData = req.body;

  if (!tripData || Object.keys(tripData).length === 0) {
    return res.status(400).json({ message: "Trip data is required in request body." });
  }

  try {
    const newTrip = await Trip.create(tripData);
    return res.status(201).json(newTrip);
  } catch (error) {
    return res.status(400).json({ message: "Failed to create trip.", error });
  }
};

// Existing trip
const updateTrip = async (req, res) => {
  const { tripCode } = req.params;
  const tripData = { ...req.body, code: tripCode };

  try {
    const updatedTrip = await Trip.findOneAndUpdate({ code: tripCode }, tripData, { new: true });

    if (!updatedTrip) {
      return res.status(404).json({ message: `No trip found for code: ${tripCode}` });
    }

    return res.status(200).json(updatedTrip);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update trip.", error });
  }
};

// Delete trip by code
const deleteTrip = async (req, res) => {
  const { tripCode } = req.params;

  if (!tripCode) {
    return res.status(400).json({ message: "tripCode parameter is required." });
  }

  try {
    const result = await Trip.deleteOne({ code: tripCode });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: `No trip found with code: ${tripCode}` });
    }

    return res.status(204).send(); // No content
  } catch (error) {
    return res.status(500).json({ message: "Failed to delete trip.", error });
  }
};

module.exports = {
  fetchTrips,
  addTrip,
  updateTrip,
  deleteTrip,
};
