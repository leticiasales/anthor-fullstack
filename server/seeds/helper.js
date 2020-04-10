const { getObjectId, getObjectIds } = require('mongo-seeding');

const mapToEntities = names => {
  return names.map(name => {
    if ((typeof name) == "string") {
      const _id = getObjectId(name);

      return {
        _id,
        name,
      };
    } else {
      return name;
    }
  });
};

module.exports = {
  mapToEntities,
  getObjectId,
  getObjectIds
};
