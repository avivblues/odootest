const Package = require("../models/item");
const mongoose = require("mongoose"),
  { Schema } = mongoose,
  ObjectId = Schema.ObjectId;
module.exports = {
  //# create a Package
  create: async (request, reply) => {
    // contoh pertama db rollback (bahasa mysql)
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const Packagex = request.body;
      const newPackage = await Package.create(Packagex);
      // if client connection status is in error, throw an error to cancel the transaction
      if (request.aborted || request.error) {
        throw new Error("Client connection status is in error");
      }
      await session.commitTransaction();
      session.endSession();
      // reply to client
      reply.send(newPackage);
    } catch (e) {
      console.error(e);
      reply.send(e);
      await session.abortTransaction();
      session.endSession();
    }
  },
  //#get the list of Packages
  fetch: async (request, reply) => {
    try {
      const Packages = await Package.find({});
      reply.send(Packages);
    } catch (error) {
      console.error(error);
      reply.send("Error fetching data");
    }
  },
  //#get a single Package
  get: async (request, reply) => {
    try {
      const PackageId = request.params.id;
      const Package = await Package.findById(PackageId);
      reply.code(200).send(Package);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  //#update a Package
  update: async (request, reply) => {
    try {
      const PackageId = request.params.id;
      const updates = request.body;
      await Package.findByIdAndUpdate(PackageId, updates);
      const PackageToUpdate = await Package.findById(PackageId);
      reply.code(200).send({ data: PackageToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },

  //#delete a Package
  delete: async (request, reply) => {
    try {
      const PackageId = request.params.id;
      const PackageToDelete = await Package.findById(PackageId);
      await Package.findByIdAndDelete(PackageId);
      reply.code(200).send({ data: PackageToDelete });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
};
